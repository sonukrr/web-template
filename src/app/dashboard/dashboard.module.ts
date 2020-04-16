import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RegularFormsComponent } from "./components/regular-forms/regular-forms.component";
import { ExtendedFormsComponent } from "./components/extended-forms/extended-forms.component";
import { ValidationFormsComponent } from "./components/validation-forms/validation-forms.component";
import { RegularTablesComponent } from "./components/regular-tables/regular-tables.component";
import { ExtendedTablesComponent } from "./components/extended-tables/extended-tables.component";
import { DataTablesComponent } from "./components/data-tables/data-tables.component";
import { ChartsComponent } from "./components/charts/charts.component";
import { MapsComponent } from "./components/maps/maps.component";
import { WidgetsComponent } from "./components/widgets/widgets.component";
import { DashNavComponent } from "./containers/dash-nav/dash-nav.component";
import {
  MatInputModule,
  MatFormFieldModule,
  MatTableModule
} from "@angular/material";
import { DashContentComponent } from "./components/dash-content/dash-content.component";
import { WorldMapComponent } from "./d3js/world-map/world-map.component";
import { ListTypeCardComponent } from './containers/list-type-card/list-type-card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RegularFormsComponent,
    ExtendedFormsComponent,
    ValidationFormsComponent,
    RegularTablesComponent,
    ExtendedTablesComponent,
    DataTablesComponent,
    ChartsComponent,
    MapsComponent,
    WidgetsComponent,
    DashNavComponent,
    DashContentComponent,
    WorldMapComponent,
    ListTypeCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {}
