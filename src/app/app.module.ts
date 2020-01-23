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
import { ColaboradorNovoComponent } from './colaborador-novo/colaborador-novo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColaboradorDetalhesComponent } from './colaborador-detalhes/colaborador-detalhes.component';
import { ColaboradorEditarComponent } from './colaborador-editar/colaborador-editar.component';
import { SetorDetalhesComponent } from './setor-detalhes/setor-detalhes.component';
import { FormDebugComponent } from './utils/form-debug/form-debug.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradoresComponent,
    SetoresComponent,
    MenuComponent,
    ColaboradorNovoComponent,
    ColaboradorDetalhesComponent,
    ColaboradorEditarComponent,
    SetorDetalhesComponent,
    FormDebugComponent
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
    LayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
