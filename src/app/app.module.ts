import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign/campaign.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { StartCampaignComponent } from './start-campaign/start-campaign.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent,
    FrontPageComponent,
    WhatWeDoComponent,
    StartCampaignComponent,
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
