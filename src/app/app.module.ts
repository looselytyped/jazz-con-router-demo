import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, NavigationError } from '@angular/router';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { routes, classResolver } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {
  ClassesComponent,
  ClassComponent
} from './classes';

import {
  RepoService,
  ClassesResolver
} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassesComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      enableTracing: true
    }),

    MaterialModule.forRoot()
  ],
  providers: [
    RepoService,
    ClassesResolver,
    Title,
    { provide: 'classResolver', useFactory: classResolver, deps: [RepoService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
