// Angular.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Modelos.
import { Country } from '../interfaces/country-interface';

// RXJS.
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  searchCountry(countryText: string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(`${ this.apiUrl }/name/${ countryText }`);
  }

  searchCountryCapital(capital: string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(`${ this.apiUrl }/capital/${ capital }`)
  }

  searchCountryRegion(region: string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(`${ this.apiUrl }/region/${ region }`);
  }

  getCountry(id: string): Observable<Country> {
    return this.http.get<Country>(`${ this.apiUrl }/alpha/${ id }`);
  }
}
