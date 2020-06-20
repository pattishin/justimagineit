import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { environment } from '../environments/environment';

import AppComponent from './app.component';
import PromptComponentComponent from './prompt-component/prompt-component.component';
import MainComponent from './components/main/main.component';
import DonateComponent from './components/donate/donate.component';
import EducationComponent from './components/education/education.component';
import SocialMediaFeedComponent from './components/socialmediafeed/SocialMediaFeed.component';
import ResourceComponent from './components/resource/resource.component';

import PwaService from './services/pwa.service';

const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();
const declarationList = [
  AppComponent,
  PromptComponentComponent,
  DonateComponent,
  EducationComponent,
  MainComponent,
  SocialMediaFeedComponent,
  ResourceComponent
];
const importList = [
  AppRoutingModule,
  BrowserModule,
  BrowserAnimationsModule,
  MaterialModule,
  FontAwesomeModule,
  ServiceWorkerModule.register(
    'ngsw-worker.js', 
    { enabled: environment.production }
  )
];

@NgModule({
  declarations: declarationList,
  imports: importList,
  entryComponents: [
    PromptComponentComponent
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializer,
    deps: [ PwaService ],
    multi: true
  }],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
