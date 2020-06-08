import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PromptComponentComponent } from './prompt-component/prompt-component.component';
import { PwaService } from './services/pwa.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MainComponent } from './components/main/main.component';
import { DonateComponent } from './components/donate/donate.component';
import { EducationComponent } from './components/education/education.component';
import { SocialMediaFeedComponent } from './components/socialmediafeed/SocialMediaFeed.component';
import { ResourceComponent } from './components/resource/resource.component';


const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();

@NgModule({
  declarations: [
    AppComponent,
    PromptComponentComponent,
    DonateComponent,
    EducationComponent,
    MainComponent,
    SocialMediaFeedComponent,
    ResourceComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  entryComponents: [
    PromptComponentComponent
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: initializer, deps: [PwaService], multi: true},
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
