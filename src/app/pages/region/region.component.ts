// Angular.
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

// Componentes.
import { TableComponent } from 'src/app/components/table/table.component';

// Modelos.
import { Country } from '../../core/interfaces/country-interface';

// Servicios.
import { CountryService } from '../../core/services/country.service';



@Component({
  imports: [ NgFor, NgIf, TitleCasePipe, TableComponent, ],
  standalone: true,
  selector: 'app-region',
  styles: [ ],
  templateUrl: './region.component.html',
})
export default class RegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  activateRegion(region: string) {

    if (region === this.activeRegion) { return; }

    this.activeRegion = region;
    this.countries = [];

    this.countryService.searchCountryRegion(this.activeRegion)
      .subscribe( countries => {
        console.log(countries);
        this.countries = countries;
      });
  }
}
