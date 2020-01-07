import { ColaboradoresService } from './colaboradores.service';
import { Colaborador } from './colaborador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit {

  colaboradores: Colaborador[];

  constructor(private colaboradoresService: ColaboradoresService) { }

  ngOnInit() {
    this.getColaboradores();
  }

  getColaboradores() {
    return this.colaboradoresService.getColaboradores().subscribe(res => {
        this.colaboradores = res;
        console.log(this.colaboradores);
      });  
  }

  getColaboradorById(id: number) {
    return null;
  }



}
