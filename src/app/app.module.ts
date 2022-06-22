import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { EhomeComponent } from './employee/ehome/ehome.component';
import { SeePostingComponent } from './employee/see-posting/see-posting.component';
import { RhomeComponent } from './recruiter/rhome/rhome.component';
import { JobPostingComponent } from './recruiter/job-posting/job-posting.component';
import { HomeComponent } from './login/home/home.component';
import { AuthComponent } from './login/auth/auth.component';
import { PrevreffComponent } from './employee/prevreff/prevreff.component';
import { RefferalComponent } from './recruiter/refferal/refferal.component';
import { RRefferalsComponent } from './recruiter/r-refferals/r-refferals.component';
import { LbComponent } from './employee/lb/lb.component';

@NgModule({
  declarations: [
    AppComponent,
    SeePostingComponent,
    EhomeComponent,
    RhomeComponent,
    JobPostingComponent,
    HomeComponent,
    AuthComponent,
    PrevreffComponent,
    RefferalComponent,
    RRefferalsComponent,
    LbComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1053636315732-h482h3vii36h9tludh74snuc2c3kofbe.apps.googleusercontent.com' 
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
