// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/country/country.component'), pathMatch: 'full', },
  { path: 'capital', loadComponent: () => import('./pages/capital/capital.component'), },
  { path: 'country/:id', loadComponent: () => import('./pages/show-country/show-country.component'), },
  { path: 'region', loadComponent: () => import('./pages/region/region.component'), },
  { path: '**', redirectTo: '', },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { bindToComponentInputs: true }),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
