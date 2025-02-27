import { Routes } from '@angular/router';
import { Pantalla1Component } from './Pages/pantalla1/pantalla1.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'pantalla1',
        pathMatch: 'full'
    },
    {
        path:'pantalla1',
        component:Pantalla1Component
    }
];
