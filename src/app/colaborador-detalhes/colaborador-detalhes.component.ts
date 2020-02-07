import { AppConstants } from './../utils/app-constants';
import { ColaboradoresService } from './../services/colaboradores.service';
import { Colaborador } from './../models/colaborador.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

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
  }

  delete(id) {
    const swal = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger line-spacing'
      },
      buttonsStyling: false
    })
    
    swal.fire({
      title: AppConstants.CONFIRMAR_EXCLUSAO, 
      text: AppConstants.MENSAGEM_EXCLUSAO,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: AppConstants.CONFIRMAR_BOTAO_EXCLUSAO,
      cancelButtonText: AppConstants.CANCELAR_BOTAO_EXCLUSAO,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        //realiza a exclução do colaborador
        this.colaboradorService.delete(id).subscribe(res => {
          this.router.navigate(['colaboradores'])
          swal.fire(
            AppConstants.EXCLUIDO,
            AppConstants.COLABORADOR_EXCLUIDO,
            'success'
          )
        }, err => console.error(err));      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swal.fire(
          AppConstants.CANCELADO,
          AppConstants.OPERACAO_CANCELADA,
          'error'
        )
      }
    });
    
  }
}
