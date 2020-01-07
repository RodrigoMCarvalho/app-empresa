import { ColaboradoresService } from './../colaboradores/colaboradores.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-colaborador',
  templateUrl: './novo-colaborador.component.html',
  styleUrls: ['./novo-colaborador.component.scss']
})
export class NovoColaboradorComponent implements OnInit {

  colaboradorForm: FormGroup;
  isLoadingResults = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private colaboradorService: ColaboradoresService
  ) { }

  ngOnInit() {
    this.colaboradorForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'cpf' : [null, Validators.required],
      'email' : [null, Validators.required],
      'idade' : [null, Validators.required]
    })
  }

  addColaborador() {

  }

}
