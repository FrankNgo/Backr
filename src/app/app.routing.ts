import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { StartCampaignComponent } from './start-campaign/start-campaign.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemDetailsComponent }from './item-details/item-details.component';



const appRoutes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'whatWeDo',
    component: WhatWeDoComponent
  },
  {
    path: 'startCampaign',
    component: StartCampaignComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'logIn',
    component: LogInComponent
  },
  {
    path: 'signIn',
    component: SignUpComponent
  },
  {
    path: 'addItem',
    component: AddItemComponent
  },
  {
    path: 'items/:id',
    component: ItemDetailsComponent
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
