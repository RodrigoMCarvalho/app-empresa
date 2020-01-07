import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { SetoresComponent } from './setores/setores.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const ROUTES: Routes = [
  { path: 'setores', component: SetoresComponent},
  { path: 'colaboradores', component: ColaboradoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
