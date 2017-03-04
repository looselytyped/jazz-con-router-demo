import { ClassesComponent } from './classes';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

import {
  ClassesResolver
} from './shared'

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: "Welcome!"
    }
  },
  {
    path: 'classes',
    component: ClassesComponent,
    data: {
      title: "Classes"
    },
    resolve: {
      classes: ClassesResolver
    }
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
