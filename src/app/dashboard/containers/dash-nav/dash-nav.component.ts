import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dash-nav',
  templateUrl: './dash-nav.component.html',
  styleUrls: ['./dash-nav.component.css']
})
export class DashNavComponent implements OnInit {

  @Input()
  title="";
  
  constructor() { }

  ngOnInit() {
  }

}
