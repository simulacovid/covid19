import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.scss']
})

export class DashComponent implements OnInit {

  constructor() { }

  isMobile = false;
  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 992;
    // console.log(w);
    if (w < breakpoint) {
      return true;
      // console.log("hide dash");
    } 
    else {
      // console.log("show dash");
      return false;
    }
  }

  ngOnInit() {
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      // console.log("what happens here");
      this.isMobile = this.getIsMobile();
    };
  }
}
