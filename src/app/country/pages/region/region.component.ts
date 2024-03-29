import { Component } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';



@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
  ]
})
export class RegionComponent {

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
