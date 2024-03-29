import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country-interface';



@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class CountryComponent {

  inputText: string = '';
  error: boolean = false;
  countries: Country[] = [];
  countriesSuggestion: Country[] = [];
  showSuggestion: boolean = false;

  constructor(private countryService:CountryService) { }

  search(inputText: string) {
    this.showSuggestion = false;
    this.error = false;
    this.inputText = inputText;
    
    this.countryService.searchCountry(this.inputText)
      .subscribe( (countries) => {
          this.countries = countries;
      }, (e) => {
        this.error = true;
        this.countries = [];
      });
  }

  suggestion(inputText: string) {
    this.error = false;
    this.inputText = inputText;
    this.showSuggestion = true;

    this.countryService.searchCountry(inputText)
      .subscribe( countries => {
        this.countriesSuggestion = countries.splice(0, 5);
      });
  }

  searchSuggestion(inputText: string) {
    this.search(inputText);
  }
}
