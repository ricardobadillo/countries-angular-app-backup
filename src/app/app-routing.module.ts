import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalComponent } from './country/pages/capital/capital.component';
import { CountryComponent } from './country/pages/country/country.component';
import { RegionComponent } from './country/pages/region/region.component';
import { ShowCountryComponent } from './country/pages/show-country/show-country.component';



const routes: Routes = [
    {
        path: '',
        component: CountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'capital',
        component: CapitalComponent,
    },
    {
        path: 'region',
        component: RegionComponent
    },
    {
        path: 'country/:id',
        component: ShowCountryComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];



@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}