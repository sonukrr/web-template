import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegularFormsComponent } from './components/regular-forms/regular-forms.component';
import { MapsComponent } from './components/maps/maps.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { ChartsComponent } from './components/charts/charts.component';
import { DataTablesComponent } from './components/data-tables/data-tables.component';
import { ExtendedTablesComponent } from './components/extended-tables/extended-tables.component';
import { RegularTablesComponent } from './components/regular-tables/regular-tables.component';
import { ValidationFormsComponent } from './components/validation-forms/validation-forms.component';
import { ExtendedFormsComponent } from './components/extended-forms/extended-forms.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component:DashboardComponent,
    children: [
      {
        path: 'regular-forms',
        component: RegularFormsComponent,
        pathMatch: 'full',
        outlet: 'dash'
      },
      {
        path: 'extended-forms',
        component: ExtendedFormsComponent,
        pathMatch: 'full',
        outlet: 'dash'
      },
      {
        path: 'validation-forms',
        component: ValidationFormsComponent,
        pathMatch: 'full',
        outlet: 'dash'
      },
      {
        path: 'regular-tables',
        component: RegularTablesComponent,
        pathMatch: 'full',
        outlet: 'dash'
      },
      {
        path: 'extended-tables',
        component: ExtendedTablesComponent,
        pathMatch: 'full',
        outlet: 'dash'
      },
      {
        path: 'data-tables',
        component: DataTablesComponent,
        pathMatch: 'full',
        outlet: 'dash'
      },
      {
        path: 'charts',
        component: ChartsComponent,
        pathMatch: 'full',
        outlet: 'dash'
      },
      {
        path: 'widgets',
        component: WidgetsComponent,
        pathMatch: 'full',
        outlet: 'dash'
      },
      {
        path: 'maps',
        component: MapsComponent,
        pathMatch: 'full',
        outlet: 'dash'
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
