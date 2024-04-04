import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country-interface';
// import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  searchCountry(countryText: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${countryText}`;
    return this.http.get<Country[]>(url);
      // .pipe(
      //   catchError(error => of([]))
      // );
  }

  searchCountryCapital(capitalText: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${capitalText}`;
    return this.http.get<Country[]>(url);
  }

  searchCountryRegion(region: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }

  getCountry(id: string): Observable<Country> {

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
