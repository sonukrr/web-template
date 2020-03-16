import { Component, ViewChild, ElementRef, AfterViewChecked, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("dashboardDom", { static: false })
  dashboardDom: ElementRef;

  isDashboard: boolean = false;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd && e.url.includes("dashboard")) {
        this.isDashboard = true;

      }
    });

  }


  onDashboardClick($event) {
    if ($event === "true") {
      // this.dashboardDom.nativeElement.insertAdjacentHTML('beforeend', '<router-outlet></router-outlet>');
      this.isDashboard = true;
    }
    this.router.navigate(["/dashboard"]);
  }


}
