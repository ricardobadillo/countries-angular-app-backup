// Angular.
import { DecimalPipe, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';

// Modelos.
import { Country } from 'src/app/core/interfaces/country-interface';

// Servicios.
import { CountryService } from 'src/app/core/services/country.service';



@Component({
  imports: [ DecimalPipe, NgIf, ],
  standalone: true,
  selector: 'app-show-country',
  styleUrls: ['./show-country.component.css'],
  templateUrl: './show-country.component.html',
})
export default class ShowCountryComponent implements OnInit {

  public country!: Country;
  public noResults = false;
  public showSpinner = false;

  @Input()
  public id?: string;

  private countryService = inject(CountryService);

  ngOnInit(): void {

    if (this.id) {
      this.showSpinner = true;

      this.countryService.getCountryByAlphaCode(this.id).subscribe({
        next: (country: Country | null) => {
          if (country) this.country = country;
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 400) this.noResults = true;
        },
        complete: () => this.showSpinner = false,
      });
    }
  }
}
