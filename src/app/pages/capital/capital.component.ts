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

  countries: Country[] = [];
  error: boolean = false;
  inputText: string = '';


  constructor(private countryService: CountryService) { }

  search(inputText: string) {
    this.error = false;
    this.inputText = inputText;

    this.countryService.searchCountryCapital(this.inputText)
      .subscribe((countries) => {
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
