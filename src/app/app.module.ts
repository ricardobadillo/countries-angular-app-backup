// Angular.
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Componentes.
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// Módulos.
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [ AppComponent, ],
  imports: [
    BrowserModule,
    HttpClientModule,

    SidebarComponent,

    AppRoutingModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
