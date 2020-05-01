import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomeComponent } from './pages/home/home.component';

import { ArticleComponent } from './pages/article/article.component';
import { HowtouseComponent } from './pages/howtouse/howtouse.component';
import { NotesComponent } from './pages/notes/notes.component';
import { PublicityComponent } from './pages/publicity/publicity.component';
import { ResearcherComponent } from './pages/researcher/researcher.component';


const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'components', component: ComponentsComponent },
    { path: 'nucleoicons',component: NucleoiconsComponent },
    { path: 'home',       component: HomeComponent },
    { path: 'article',    component: ArticleComponent },
    { path: 'howtouse',    component: HowtouseComponent },
    { path: 'notes',    component: NotesComponent },
    { path: 'publicity',    component: PublicityComponent },
    { path: 'researcher',    component: ResearcherComponent },
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
