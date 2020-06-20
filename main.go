package main

import (
  "context"
  "net/http"
  "cloud.google.com/go/firestore"
  "github.com/gin-gonic/gin"
  "github.com/gin-contrib/cors"
  "google.golang.org/api/iterator"
  "google.golang.org/api/option"
)

const firestoreAccountFile = "firebase.json"
const firestoreProjectId = "justimagine"

type Donation struct {
  Title string `json:"title" binding:"required"`
  Summary string `json:"summary" binding:"optional"`
  Link string `json:"link" binding:"optional"`
}

func main() {
  // router init
  router := gin.Default()
  config := cors.DefaultConfig()
  config.AllowOrigins = []string{"http://localhost:4200"}
  config.AllowMethods = []string{"GET", "POST"}
  config.AllowHeaders = []string{"Origin"}
  config.ExposeHeaders = []string{"Content-Length"}

  router.Use(cors.New(config))

  // routes
  apiRoutes := router.Group("/api")
  apiRoutes.GET("/donation", getDonation)

  // run application on port 8081
  router.Run(":8081")
}

/**
 * Create a Firestore instance
 */
func createNewFirestore(ctx context.Context)(*firestore.Client, error) {
  return firestore.NewClient(ctx, firestoreProjectId, option.WithServiceAccountFile(firestoreAccountFile))
}

/**
 * Handle donations information
 */
func getDonation(c *gin.Context) {
  ctx := context.Background()
  client, err := createNewFirestore(ctx)

  if err != nil {
    c.JSON(http.StatusBadRequest, gin.H{ "error": err.Error() })
  }

  defer client.Close()

  // Start donation retrieval from firestore
  var donations []Donation
  var iter = client.Collection("donations").Documents(ctx)

  defer iter.Stop()

  for {
    doc, err:= iter.Next()
    if err == iterator.Done { break }

    if err != nil {
      c.JSON(http.StatusBadRequest, gin.H{ "error": err.Error() })
    }

    var model Donation
    if err := doc.DataTo(&model); err != nil {
      c.JSON(http.StatusBadRequest, gin.H{ "error": err.Error() })
    }

    donations = append(donations, model)
  }
  // End donation retrieval from firestore

  c.Writer.Header().Set("Content-Type", "application/json")
  c.JSON(http.StatusOK, donations)
}

