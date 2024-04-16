// Angular.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Modelos.
import { CacheStore } from '../interfaces/cache-store.interface';
import { Country } from '../interfaces/country-interface';
import { Region } from '../interfaces/region.type';

// RXJS.
import { delay, map, Observable, tap } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital:   { textInput: '', countries: [] },
    byCountries: { textInput: '', countries: [] },
    byRegion:    { region: 'africa', countries: [] },
  };

  constructor(private http:HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  searchCountry(country: string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(`${ this.apiUrl }/name/${ country }`)
      .pipe(
        delay(3000),
        tap((countries: Array<Country>) => this.cacheStore.byCountries = { textInput: country, countries }),
        tap(() => this.saveToLocalStorage()),
      );
  }

  searchCapital(capital: string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(`${ this.apiUrl }/capital/${ capital }`)
      .pipe(
        delay(3000),
        tap((countries: Array<Country>) => this.cacheStore.byCapital = { textInput: capital, countries }),
        tap(() => this.saveToLocalStorage()),
      );
  }

  searchRegion(region: Region): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(`${ this.apiUrl }/region/${ region }`)
      .pipe(
        delay(3000),
        tap((countries: Array<Country>) => this.cacheStore.byRegion = { region, countries }),
        tap(() => this.saveToLocalStorage()),
      );
  }

  getCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Array<Country>>(`${ this.apiUrl }/alpha/${ code }`)
      .pipe(
        map((countries: Array<Country>) => countries.length > 0 ? countries[0] : null),
        delay(3000),
      );
  }
}
