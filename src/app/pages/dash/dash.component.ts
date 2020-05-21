import { Component, OnInit } from '@angular/core';
import { ivcovidRio } from './ivcovid_rj'


@Component({
    selector: 'app-home',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.scss']
})

export class DashComponent implements OnInit {

  ivc_rj = ivcovidRio;

  constructor() { }

  ngOnInit() {
  }
}
