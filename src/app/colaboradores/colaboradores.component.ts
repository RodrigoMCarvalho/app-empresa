import { ColaboradorPage } from '../models/colaboradorPage.model';
import { ColaboradoresService } from '../services/colaboradores.service';
import { Colaborador } from '../models/colaborador.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit {

  colaboradores: Colaborador[];
  colaborador: Colaborador;
  pageColaborador : ColaboradorPage ;
  selectedPage : number = 0;

  constructor(private colaboradoresService: ColaboradoresService) { }

  ngOnInit() {
    this.getColaboradores();
  }

  getColaboradores() {
    return this.colaboradoresService.getColaboradores().subscribe(res => {
        this.colaboradores = res;
      });  
  }

  getColaboradorPage(page:number): void {
    this.colaboradoresService.getColaboradoresPage(page)
        .subscribe(page => this.pageColaborador = page)
  }

  nSelect(page: number): void {
    console.log("Página selecionada: " + page);
    this.selectedPage=page;
    this.getColaboradorPage(page);
  }

  getColaboradorById(id: number) {
    return this.colaboradoresService.getColaboradorById(id).subscribe(res => {
      this.colaborador = res;
    });
  }



}
