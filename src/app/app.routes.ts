import { Routes } from '@angular/router';
import { Pantalla1Component } from './Pages/pantalla1/pantalla1.component';
import { Pantalla2Component } from './Pages/pantalla2/pantalla2.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'pantalla1',
        pathMatch: 'full'
    },
    {
        path: 'pantalla1',
        component: Pantalla1Component
    },
    {
        path: 'pantalla2',
        component: Pantalla2Component
    }

];
