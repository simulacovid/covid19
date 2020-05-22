import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataTablesModule } from 'angular-datatables';

import { DashComponent } from './dash/dash.component';
import { HowtouseComponent } from './howtouse/howtouse.component';
import { ArticleComponent } from './article/article.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotesComponent } from './notes/notes.component';
import { PublicityComponent } from './publicity/publicity.component';
import { PublicationsComponent } from './publications/publications.component';
import { HomeComponent } from './home/home.component';
import { CopacabanaComponent } from './case-study/copacabana/copacabana.component';
import { HowToActComponent } from './how-to-act/how-to-act.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PartnersComponent } from './partners/partners.component';

import * as $ from "jquery";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
        PdfViewerModule,
        DataTablesModule
    ],
    declarations: [
        DashComponent,
        HowtouseComponent,
        ArticleComponent,
        AboutusComponent,
        NotesComponent,
        PublicityComponent,
        PublicationsComponent,
        HomeComponent,
        CopacabanaComponent,
        HowToActComponent,
        StatisticsComponent,
        PartnersComponent,
    ]
})
export class PagesModule { }
