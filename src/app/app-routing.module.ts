import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LbComponent } from './employee/lb/lb.component';
import { SeePostingComponent } from './employee/see-posting/see-posting.component';
import { HomeComponent } from './login/home/home.component';
import { JobPostingComponent } from './recruiter/job-posting/job-posting.component';

import { PrevreffComponent } from './employee/prevreff/prevreff.component';
import { RefferalComponent } from './recruiter/refferal/refferal.component';
import { RRefferalsComponent } from './recruiter/r-refferals/r-refferals.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'employee/jobposting', component: SeePostingComponent },
  {path:'recruiter/jobposting', component: JobPostingComponent },
  {path:'employee/leaderboard', component: LbComponent },

  {path: 'employee/prevrefferal', component: PrevreffComponent},
  {path: 'recruiter/refferal', component: RefferalComponent},
  {path: 'recruiter/prevrefferal', component: RRefferalsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
