import { Colaborador } from './../models/colaborador.model';
import { ColaboradoresService } from './../services/colaboradores.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-colaborador-editar',
  templateUrl: './colaborador-editar.component.html'
})
export class ColaboradorEditarComponent implements OnInit {
  
  colaboradorForm: FormGroup;
  formBuilder:FormBuilder;
  colaborador: Colaborador;
  isLoadingResults = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private colaboradorService: ColaboradoresService) { }

  ngOnInit() {
    this.colaboradorService.getColaboradorById(this.route.snapshot['id']);
    this.colaboradorForm = this.formBuilder.group({
      'nome'     : [null, [Validators.required, Validators.minLength(3)]],
      'cpf'      : [null, Validators.required],
      'email'    : [null, [Validators.required, Validators.email]],
      'idade'    : [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      'telefone' : [null, Validators.required],
      'setor'    : [null, Validators.required]
     });
  }

  getColaboradoresById(id) {
    this.colaboradorService.getColaboradorById(id).subscribe(res => {
      this.colaborador = res
    })
  }

  updateColaborador(form: NgForm) {
    this.isLoadingResults = true;
    this.colaboradorService.updateColaborador(this.colaborador.id, form).subscribe( res => {
      this.isLoadingResults = false;
      this.router.navigate([`/colaborador-detalhe/` + this.colaborador.id]);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }


}