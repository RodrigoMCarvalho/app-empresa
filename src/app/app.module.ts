import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { SetoresComponent } from './setores/setores.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradoresComponent,
    SetoresComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
