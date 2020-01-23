import { Colaborador } from './../models/colaborador.model';
import { SetoresService } from './../services/setores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColaboradoresService } from '../services/colaboradores.service';
import { Setor } from '../models/setor.model';

@Component({
  selector: 'app-setor-detalhes',
  templateUrl: './setor-detalhes.component.html',
  styleUrls: ['./setor-detalhes.component.scss']
})
export class SetorDetalhesComponent implements OnInit {

  setor: Setor;
  colaboradoresPorSetor: Colaborador[];
  isLoadingResults = true;

  constructor(
    private setorService: SetoresService,
    private route: ActivatedRoute, 
    private colaboradorService: ColaboradoresService
  ) { }

  ngOnInit() {
    this.getSetor(this.route.snapshot.params['id']);
    
  }

  getSetor(id) {
    this.setorService.getSetoresById(id)
        .subscribe( data => {
          this.setor = data
          this.getColaboradoresBySetor(data.id);
          console.log(this.setor);
          this.isLoadingResults = false;
        });
  }

  getColaboradoresBySetor(id) {
    this.colaboradorService.getColaboradoresBySetor(id)
        .subscribe( data => {
          this.colaboradoresPorSetor = data
          console.log(this.colaboradoresPorSetor);
          this.isLoadingResults = false;
        });
  }


}
