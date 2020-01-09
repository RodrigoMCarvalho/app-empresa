import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { SetoresComponent } from './setores/setores.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradorNovoComponent } from './colaborador-novo/colaborador-novo.component';


export const ROUTES: Routes = [
  { path: 'setores', component: SetoresComponent},
  { path: 'colaboradores', component: ColaboradoresComponent},
  { path: 'colaborador-novo', component: ColaboradorNovoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
