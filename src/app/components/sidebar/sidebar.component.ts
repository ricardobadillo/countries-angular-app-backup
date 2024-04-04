// Angular.
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  imports: [ RouterModule ],
  selector: 'app-sidebar',
  standalone: true,
  styleUrls: ['./sidebar.component.css'],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent { }
