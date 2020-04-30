import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HowtouseComponent } from './howtouse/howtouse.component';
import { ArticleComponent } from './article/article.component';
import { ResearcherComponent } from './researcher/researcher.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { NotesComponent } from './notes/notes.component';
import { PublicityComponent } from './publicity/publicity.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
    ],
    declarations: [
        HomeComponent,
        HowtouseComponent,
        ArticleComponent,
        ResearcherComponent,
        VolunteerComponent,
        NotesComponent,
        PublicityComponent,
    ]
})
export class PagesModule { }
