import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note3',
  templateUrl: './note3.component.html',
  styleUrls: ['./note3.component.scss']
})
export class Note3Component implements OnInit {
  src = "http://zecopol.github.io/zecopol/Artigo_IndiceVulnerabilidadeCOVID19_18052020.pdf";
  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  items;
  
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }
  
  nextPage() {
    this.page++;
    console.log("next page");
  }
  
  prevPage() {
    this.page--;
    console.log("previous page");
  }
  
  ngOnInit(): void {
  }
}
