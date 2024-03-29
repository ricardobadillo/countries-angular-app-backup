import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country-interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {

  @Input() Countries: Country[] = [];

  constructor() { }
}
