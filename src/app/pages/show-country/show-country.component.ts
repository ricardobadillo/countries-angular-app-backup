// Angular.
import { DecimalPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Modelos.
import { Country } from '../../core/interfaces/country-interface';

// RXJS.
import { switchMap, tap } from 'rxjs/operators';

// Servicios.
import { CountryService } from '../../core/services/country.service';



@Component({
  imports: [ DecimalPipe, NgIf, ],
  standalone: true,
  selector: 'app-show-country',
  styles: [ ],
  templateUrl: './show-country.component.html',
})
export default class ShowCountryComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.countryService.getCountry(param.id)),
        tap(console.log)
      )
      .subscribe({
        next: (country) => {
          this.country = country[0];
          console.log(this.country);
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

}
