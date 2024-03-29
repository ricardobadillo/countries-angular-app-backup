import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country-interface';
import { switchMap, tap } from 'rxjs/operators';



@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  country!: Country;

  constructor( private activatedRoute: ActivatedRoute, private countryService: CountryService ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( (param) => this.countryService.getCountry(param.id)),
        tap(console.log)
      )
      .subscribe( country => {
        this.country = country[0];
      });
  }

}
