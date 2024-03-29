import { Component } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';



@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent {

  inputText: string = '';
  error: boolean = false;
  countries: Country[] = [];

  
  constructor(private countryService: CountryService) { }

  search(inputText: string) {
    this.error = false;
    this.inputText = inputText;
    
    this.countryService.searchCountryCapital(this.inputText)
      .subscribe( (countries) => {
          this.countries = countries;
      }, (e) => {
        this.error = true;
        this.countries = [];
      });
  }

  suggestion(inputText: string) {
    this.error = false;
    
  }
}
