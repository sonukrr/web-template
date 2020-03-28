import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dash-nav',
  templateUrl: './dash-nav.component.html',
  styleUrls: ['./dash-nav.component.scss']
})
export class DashNavComponent implements OnInit {

  @Input()
  title = "";

  @Output()
  isCollapseSideNav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  collapseSideNav() {
    const iconName = (<HTMLElement> document.querySelector('.toggle-icon')).innerText;

    if(iconName === 'more_vert')
    {
    this.isCollapseSideNav.emit('true');
   (<HTMLElement> document.querySelector('.toggle-icon')).innerText='view_list';
    }
    else{
      this.isCollapseSideNav.emit('false');
      (<HTMLElement> document.querySelector('.toggle-icon')).innerText='more_vert';

    }
  }

}
