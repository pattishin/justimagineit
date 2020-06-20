import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import MainComponent from './components/main/main.component';
import DonateComponent from './components/donate/donate.component';
import EducationComponent from './components/education/education.component';
import ResourceComponent from './components/resource/resource.component';
import SocialMediaFeedComponent from './components/socialmediafeed/SocialMediaFeed.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'education', component: EducationComponent },
  { path: 'resources', component: ResourceComponent },
  { path: 'blmfollow', component: SocialMediaFeedComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
