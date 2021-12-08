import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHoverMouseComponent }from './card-hover-mouse/card-hover-mouse.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardHoverMouseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot( appRoutes,{
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule, CardHoverMouseComponent], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
