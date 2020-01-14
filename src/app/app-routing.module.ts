import { SetorDetalhesComponent } from './setor-detalhes/setor-detalhes.component';
import { ColaboradorDetalhesComponent } from './colaborador-detalhes/colaborador-detalhes.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { SetoresComponent } from './setores/setores.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradorNovoComponent } from './colaborador-novo/colaborador-novo.component';
import { ColaboradorEditarComponent } from './colaborador-editar/colaborador-editar.component';


export const ROUTES: Routes = [
  { path: 'setores', component: SetoresComponent},
  { path: 'colaboradores', component: ColaboradoresComponent},
  { path: 'colaborador-novo', component: ColaboradorNovoComponent},
  { path: 'colaborador-detalhes/:id', component: ColaboradorDetalhesComponent},
  { path: 'colaborador-editar/:id', component: ColaboradorEditarComponent},
  { path: 'setor-detalhes/:id', component: SetorDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
