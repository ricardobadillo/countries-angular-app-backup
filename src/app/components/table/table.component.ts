// Angular.
import { DecimalPipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modelos.
import { Country } from '../../core/interfaces/country-interface';



@Component({
  imports: [ DecimalPipe, NgFor, RouterModule, ],
  selector: 'app-table',
  standalone: true,
  styles: [ ],
  templateUrl: './table.component.html'
})
export class TableComponent {

  @Input()
  public countries: Array<Country> = [];
}
