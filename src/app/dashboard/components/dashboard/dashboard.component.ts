import { Component, OnInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  title: string = "Dashboard";


  constructor(private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (val.url.includes('regular-forms'))
          this.title = "Regular Forms";

        if (val.url.includes('extended-forms'))
          this.title = "Extended Forms";

        if (val.url.includes('validation-forms'))
          this.title = "Validation Forms";

        if (val.url.includes('regular-tables'))
          this.title = "Regular Tables";

        if (val.url.includes('extended-tables'))
          this.title = "Extended Tables";

        if (val.url.includes('data-tables'))
          this.title = "Data Tables";

        if (val.url.includes('charts'))
          this.title = "charts";

        if (val.url.includes('widgets'))
          this.title = "widgets";

        if (val.url.includes('maps'))
          this.title = "maps";

      }
    });

  }

  ngOnInit() {
    
    setTimeout(() => {
      document.getElementById('dashboardLink').click();
    }, 1000);

  }

  collapseSideNav(event) {
    if (event === 'true') {
      (<HTMLElement>document.querySelector('.sidebar')).style.width = '100px';
      (<HTMLElement>document.querySelector('.main-content')).style.marginLeft = "100px";
      document.querySelectorAll('.hide-me').forEach((e: HTMLElement) => e.hidden = true);
    }
    else {
      document.querySelectorAll('.hide-me').forEach((e: HTMLElement) => e.hidden = false);
      (<HTMLElement>document.querySelector('.sidebar')).style.width = '20%';
      (<HTMLElement>document.querySelector('.main-content')).style.marginLeft = "20%";
    }
  }

 

}
