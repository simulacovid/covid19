import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { ArticleComponent } from './pages/article/article.component';
import { HowtouseComponent } from './pages/howtouse/howtouse.component';
import { NotesComponent } from './pages/notes/notes.component';
import { PublicityComponent } from './pages/publicity/publicity.component';
import { ResearcherComponent } from './pages/researcher/researcher.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';


const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'components', component: ComponentsComponent },
    { path: 'profile',    component: ProfileComponent },
    { path: 'signup',     component: SignupComponent },
    { path: 'nucleoicons',component: NucleoiconsComponent },
    { path: 'home',       component: HomeComponent },
    { path: 'about',      component: AboutComponent },
    { path: 'article',    component: ArticleComponent },
    { path: 'howtouse',    component: HowtouseComponent },
    { path: 'notes',    component: NotesComponent },
    { path: 'publicity',    component: PublicityComponent },
    { path: 'researcher',    component: ResearcherComponent },
    { path: 'volunteer',    component: VolunteerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
