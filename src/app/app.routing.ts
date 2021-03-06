import { HardwareComponent } from './hardware/hardware.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SigninComponent } from './home/signin/signin.component';
import { ProjectComponent } from './project/project.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'profile/:id',          component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'projects',      component: ProjectComponent },
    { path: 'project/:id',    component: ProjectDetailsComponent},
    { path: 'hardware',    component: HardwareComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
