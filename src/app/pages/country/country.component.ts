// Angular.
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Componentes.
import { InputComponent } from 'src/app/components/input/input.component';
import { TableComponent } from 'src/app/components/table/table.component';

// Modelos.
import { Country } from '../../core/interfaces/country-interface';

// Servicios.
import { CountryService } from '../../core/services/country.service';



@Component({
  imports: [ NgFor, NgIf, RouterModule, InputComponent, TableComponent, ],
  standalone: true,
  selector: 'app-country',
  styles: [
    `
      li {
        cursor: pointer;
      }
      `
  ],
  templateUrl: './country.component.html',
})
export default class CountryComponent {

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
