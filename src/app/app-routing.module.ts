import { NovoColaboradorComponent } from './novo-colaborador/novo-colaborador.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { SetoresComponent } from './setores/setores.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const ROUTES: Routes = [
  { path: 'setores', component: SetoresComponent},
  { path: 'colaboradores', component: ColaboradoresComponent},
  { path: 'novo-colaborador', component: NovoColaboradorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
