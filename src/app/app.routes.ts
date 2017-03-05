import {
  ClassesComponent,
  ClassComponent,
  DescriptionsComponent
} from './classes';
import { HomeComponent } from './home/home.component';
import { Routes, Route, ActivatedRouteSnapshot } from '@angular/router';

import {
  ClassesResolver,
  RepoService
} from './shared'

export function classResolver(repo: RepoService) {
  return (route: ActivatedRouteSnapshot) => {
    return repo.getClass(+route.params['id'])
  }
}

export function descriptionsResolver(repo: RepoService) {
  return (route: ActivatedRouteSnapshot) => {
    return repo.getDescriptions(+route.params['id'])
  }
}

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
    },
    children: [
      {
        path: ':id',
        children: [
          {
            path: '',
            component: ClassComponent,
            resolve: {
              class: 'classResolver'
            }
          },
          {
            path: '',
            component: DescriptionsComponent,
            resolve: {
              descriptions: 'descriptionsResolver'
            },
            outlet: 'descriptions'
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
