import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("dashboardDom", { static: false })
  dashboardDom: ElementRef;

  isDashboard: boolean = false;

  constructor(private router: Router) {

  }

  onDashboardClick($event) {
    if ($event === "true") {
      // this.dashboardDom.nativeElement.insertAdjacentHTML('beforeend', '<router-outlet></router-outlet>');
      this.isDashboard = true;
    }
    // this.router.navigate(["/dashboard"]);
  }


}
