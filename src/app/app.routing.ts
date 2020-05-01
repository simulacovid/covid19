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

import { Article1Component } from './articles/article1/article1.component'
import { Article2Component } from './articles/article2/article2.component'


const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'components', component: ComponentsComponent },
    { path: 'nucleoicons',component: NucleoiconsComponent },
    { path: 'home',       component: HomeComponent },
    { path: 'howtouse',    component: HowtouseComponent },
    { path: 'notes',    component: NotesComponent,
      children: [
        {
          path: 'article1',
          component: Article1Component
        },
        {
          path: 'article2',
          component: Article2Component
        }
      ]
    },
    { path: 'article',    component: ArticleComponent },
    { path: 'researcher',    component: ResearcherComponent },
    { path: 'publicity',    component: PublicityComponent },
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
