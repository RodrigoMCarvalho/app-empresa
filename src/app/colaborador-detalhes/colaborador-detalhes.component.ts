import { HttpErrorResponse } from '@angular/common/http';
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
      console.log(this.colaborador) 
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
      title: 'Você tem certeza que deseja excluir o colaborador?',
      text: "Esse processo é irreversível!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, pode excluir!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        //realiza a exclução do colaborador
        this.colaboradorService.delete(id).subscribe(res => {
        }, (err: HttpErrorResponse) => {
          if (err.status != 200) {
            console.log(err);
          } else {
            this.router.navigate(['colaboradores'])
            swal.fire(
              'Excluído!',
              'Colaborador excluído com sucesso!',
              'success'
            )
          }
        });      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swal.fire(
          'Cancelado',
          'Operação cancelada conforme solicitado :)',
          'error'
        )
      }
    });
    
  }
}
