import { Component, OnInit, ViewChild, AfterViewChecked, AfterViewInit, Output, ElementRef, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @Output()
  dashboardClick:EventEmitter<string>= new EventEmitter();

  @ViewChild('landingPageDom', {static: false})
  landingPageDom:ElementRef;

  constructor() { }

  
  ngOnInit() {
    
  }

  onDashboardClick(){
    this.landingPageDom.nativeElement.remove();
    this.dashboardClick.emit("true");
  }

  

}
