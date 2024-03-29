import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CapitalComponent } from './pages/capital/capital.component';
import { RegionComponent } from './pages/region/region.component';
import { CountryComponent } from './pages/country/country.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { TableComponent } from './components/table/table.component';
import { InputComponent } from './components/input/input.component';



@NgModule({
  declarations: [
    CountryComponent,
    CapitalComponent,
    RegionComponent,
    ShowCountryComponent,
    TableComponent,
    InputComponent
  ],
  exports: [
    CountryComponent,
    CapitalComponent,
    RegionComponent,
    ShowCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
