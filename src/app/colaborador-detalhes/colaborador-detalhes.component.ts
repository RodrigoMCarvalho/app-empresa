import { ColaboradoresService } from './../services/colaboradores.service';
import { Colaborador } from './../models/colaborador.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colaborador-detalhes',
  templateUrl: './colaborador-detalhes.component.html',
  styleUrls: ['./colaborador-detalhes.component.scss']
})
export class ColaboradorDetalhesComponent implements OnInit {

  colaborador: Colaborador;
  isLoadingResults = true;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private colaboradorService: ColaboradoresService
    ) { }

  ngOnInit() {
    this.getColaborador(this.route.snapshot.params['id']);
    this.isLoadingResults = true;
  }

  getColaborador(id) {
    this.colaboradorService.getColaboradorById(id)
        .subscribe( data => {
          this.colaborador = data
          console.log(this.colaborador);
          this.isLoadingResults = false;
        });
      console.log(this.colaborador) 
  }

  delete(id) {
    this.isLoadingResults = true;
    this.colaboradorService.delete(id).subscribe(res => {
      this.isLoadingResults = false;
      this.router.navigate(['colaboradores'])
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
