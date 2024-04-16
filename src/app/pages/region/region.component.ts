// Angular.
import { I18nSelectPipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Componentes.
import { TableComponent } from 'src/app/components/table/table.component';

// Modelos.
import { Country } from 'src/app/core/interfaces/country-interface';
import { Region } from 'src/app/core/interfaces/region.type';

// Servicios.
import { CountryService } from 'src/app/core/services/country.service';



@Component({
  imports: [ I18nSelectPipe, NgFor, NgIf, TitleCasePipe, TableComponent, ],
  standalone: true,
  selector: 'app-region',
  styleUrls: ['./region.component.css'],
  templateUrl: './region.component.html',
})
export default class RegionComponent implements OnInit {

  public countries: Array<Country> = [];
  public regions: Array<Region> = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public regionsMap = { africa: 'África', americas: 'América', asia: 'Asia', europe: 'Europa', oceania: 'Oceanía' };
  public selectedRegion?: Region;
  public showSpinner = false;


  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
    this.countries = this.countryService.cacheStore.byRegion.countries;
  }

  activateRegion(region: Region) {

    if (region === this.selectedRegion) return;

    this.selectedRegion = region;
    this.showSpinner = true;
    this.countries = [];

    this.countryService.searchRegion(this.selectedRegion)
      .subscribe({
        next: (countries: Array<Country>) => this.countries = countries,
        error: (error) => console.log(error),
        complete: () => this.showSpinner = false,
      });
  }
}
