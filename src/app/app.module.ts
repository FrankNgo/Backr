import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { StartCampaignComponent } from './start-campaign/start-campaign.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { routing } from './app.routing';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    WhatWeDoComponent,
    StartCampaignComponent,
    LogInComponent,
    SignUpComponent,
    ContactUsComponent,
    AboutUsComponent,
    ItemDetailsComponent,
    AddItemComponent,
    EditItemComponent,
    AuthenticationComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
