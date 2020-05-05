import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { ComponentsModule } from './components/components.module';

import { PagesModule } from './pages/pages.module';
import { Article1Component } from './articles/article1/article1.component';
import { Article2Component } from './articles/article2/article2.component';
import { Note1Component } from './notes/note1/note1.component';
import { Note2Component } from './notes/note2/note2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    Article1Component,
    Article2Component,
    Note1Component,
    Note2Component,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    PdfViewerModule,
    ComponentsModule,
    PagesModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
