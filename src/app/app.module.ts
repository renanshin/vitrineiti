import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';

import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./core/material.module";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home Component' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home Component' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Component' } }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    ButtonModule,
    MenuModule,
    CardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
