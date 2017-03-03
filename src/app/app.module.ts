import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, NavigationError } from '@angular/router';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';

import {
  RepoService,
  ClassesResolver
} from './shared'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassesComponent
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
    ClassesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
