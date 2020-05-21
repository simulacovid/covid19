import { Component, OnInit } from '@angular/core';
import { ivcovidRio } from './ivcovid_rj'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  ivc_rj = ivcovidRio;

  constructor() { }

  ngOnInit(): void {
  }

}
