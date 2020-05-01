import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { Article1Component } from './article1/article1.component'
import { Article2Component } from './article2/article2.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
    ],
    declarations: [
        Article1Component,
        Article2Component
    ]
})
export class ArticlesModule { }
