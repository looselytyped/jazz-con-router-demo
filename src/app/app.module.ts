import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, NavigationError } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatButtonModule,
} from '@angular/material';

import { routes, classResolver, descriptionsResolver } from './app.routes';
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
import { DescriptionsComponent } from './classes/list/descriptions/descriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassesComponent,
    ClassComponent,
    DescriptionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      enableTracing: true
    }),
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatButtonModule,
  ],
  providers: [
    RepoService,
    ClassesResolver,
    Title,
    { provide: 'classResolver', useFactory: classResolver, deps: [RepoService] },
    { provide: 'descriptionsResolver', useFactory: descriptionsResolver, deps: [RepoService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
