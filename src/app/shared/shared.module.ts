import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent
  ],
  exports: [
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class SharedModule { }
