import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HowtouseComponent } from './pages/howtouse/howtouse.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ResearchersComponent } from './pages/researchers/researchers.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';
import { MediaComponent } from './pages/media/media.component';
import { NotesComponent } from './pages/notes/notes.component';
import { DashComponent } from './pages/dash/dash.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HowtouseComponent,
    ArticlesComponent,
    ResearchersComponent,
    VolunteersComponent,
    MediaComponent,
    NotesComponent,
    DashComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
