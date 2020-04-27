import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DashComponent } from './pages/dash/dash.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { HowtouseComponent } from './pages/howtouse/howtouse.component';
import { MediaComponent } from './pages/media/media.component';
import { NotesComponent } from './pages/notes/notes.component';
import { ResearchersComponent } from './pages/researchers/researchers.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';


const routes: Routes = [
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: 'dash',       component: DashComponent },
  { path: 'articles',       component: ArticlesComponent },
  { path: 'howtouse',       component: HowtouseComponent },
  { path: 'media',       component: MediaComponent },
  { path: 'notes',       component: NotesComponent },
  { path: 'researchers',       component: ResearchersComponent },
  { path: 'volunteers',       component: VolunteersComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
