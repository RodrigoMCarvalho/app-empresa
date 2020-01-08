import { SetoresService } from './../setores/setores.service';
import { ColaboradoresService } from './../colaboradores/colaboradores.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Setor } from '../setores/setor.model';

@Component({
  selector: 'app-novo-colaborador',
  templateUrl: './novo-colaborador.component.html',
  styleUrls: ['./novo-colaborador.component.scss']
})
export class NovoColaboradorComponent implements OnInit {

  colaboradorForm: FormGroup;
  
  setores: Setor[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private setorService: SetoresService,
    private colaboradorService: ColaboradoresService,
    private route: Router
  ) { }

  ngOnInit() {
    this.colaboradorForm = this.formBuilder.group({
      'nome'     : [null, [Validators.required, Validators.minLength(3)]],
      'cpf'      : [null, Validators.required],
      'email'    : [null, [Validators.required, Validators.email]],
      'idade'    : [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      'telefone' : [null, Validators.required],
      'setor'    : [null, Validators.required]
    })
    this.setorService.getSetores().subscribe(res => this.setores = res);
  }

  addColaborador(form: NgForm) {
    console.log(form);
    this.colaboradorService.addColaborador(form).subscribe(res => {
        this.route.navigate(['/colaboradores'])
    }, (err) => {
      console.log(err);
    });
  }

}
