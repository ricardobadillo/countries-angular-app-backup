// Angular.
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Componentes.
import { InputComponent } from 'src/app/components/input/input.component';
import { TableComponent } from 'src/app/components/table/table.component';

// Modelos.
import { Country } from 'src/app/core/interfaces/country-interface';

// Servicios.
import { CountryService } from 'src/app/core/services/country.service';



@Component({
  imports: [ NgIf, InputComponent, TableComponent, ],
  standalone: true,
  selector: 'app-capital',
  styleUrls: ['./capital.component.css'],
  templateUrl: './capital.component.html',
})
export default class CapitalComponent implements OnInit {

  public countries: Array<Country> = [];
  public error = false;
  public showSpinner = false;
  public textInput = '';


  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.textInput = this.countryService.cacheStore.byCapital.textInput;
  }

  searchCountry(textInput: string): void {
    this.error = false;
    this.showSpinner = true;
    this.textInput = textInput;

    this.countryService.searchCapital(textInput).subscribe({
      next: (countries: Array<Country>) => this.countries = countries,
      error: () => {
        this.error = true;
        this.countries = [];
      },
      complete: () => this.showSpinner = false,
    });
  }

  suggestion(textInput: string): void {
    console.log(textInput);
    this.error = false;
  }
}
