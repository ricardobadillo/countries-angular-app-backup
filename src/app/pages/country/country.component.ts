// Angular.
import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

// Componentes.
import { InputComponent } from 'src/app/components/input/input.component';
import { TableComponent } from 'src/app/components/table/table.component';

// Modelos.
import { Country } from 'src/app/core/interfaces/country-interface';

// Servicios.
import { CountryService } from 'src/app/core/services/country.service';



@Component({
  imports: [ NgFor, NgIf, RouterModule, InputComponent, TableComponent, ],
  standalone: true,
  selector: 'app-country',
  styleUrls: ['./country.component.css'],
  templateUrl: './country.component.html',
})
export default class CountryComponent implements OnInit {

  public countries: Array<Country> = [];
  public countriesSuggestion: Array<Country> = [];
  public error = false;
  public textInput = '';
  public showSpinner = false;
  public showSuggestion = false;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    console.log(this.countries);
    this.textInput = this.countryService.cacheStore.byCountries.textInput;
  }

  search(inputText: string) {
    this.showSuggestion = false;
    this.error = false;
    this.showSpinner = true;
    this.textInput = inputText;

    this.countryService.searchCountry(this.textInput).subscribe({
      next: (countries: Array<Country>) => this.countries = countries,
      error: () => {
        this.error = true;
        this.countries = [];
      },
      complete: () => this.showSpinner = false,
    });
  }

  suggestion(inputText: string) {
    this.error = false;
    this.textInput = inputText;
    this.showSuggestion = true;

    // this.countryService.searchCountry(inputText)
    //   .subscribe( countries => {
    //     this.countriesSuggestion = countries.splice(0, 5);
    //   });
  }

  searchSuggestion(inputText: string) {
    this.search(inputText);
  }
}
