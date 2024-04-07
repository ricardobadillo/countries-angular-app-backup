// Angular.
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

// Componentes.
import { InputComponent } from 'src/app/components/input/input.component';

// Modelos.
import { Country } from '../../core/interfaces/country-interface';
import { TableComponent } from 'src/app/components/table/table.component';

// Servicios.
import { CountryService } from '../../core/services/country.service';



@Component({
  imports: [ NgIf, InputComponent, TableComponent, ],
  standalone: true,
  selector: 'app-capital',
  styles: [ ],
  templateUrl: './capital.component.html',
})
export default class CapitalComponent {

  countries: Array<Country> = [];
  error = false;
  textInput = '';


  constructor(private countryService: CountryService) { }

  searchCountry(textInput: string): void {
    this.error = false;
    this.textInput = textInput;

    this.countryService.searchCountryCapital(textInput).subscribe({
      next: (countries: Array<Country>) => this.countries = countries,
      error: (error) => {
        console.log(error);
        this.error = true;
        this.countries = [];
      }
    });
  }

  suggestion(textInput: string): void {
    console.log(textInput);
    this.error = false;
  }
}
