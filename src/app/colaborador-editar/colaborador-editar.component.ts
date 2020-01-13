import { SetoresService } from './../services/setores.service';
import { Setor } from './../models/setor.model';
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
  
  colaboradorEditForm: FormGroup;
  colaborador: Colaborador;
  isLoadingResults = false;
  setores: Setor[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder:FormBuilder,
              private colaboradorService: ColaboradoresService,
              private setoresService: SetoresService) { }

  ngOnInit() {
    this.getColaborador(this.route.snapshot.params['id']);
  
    this.colaboradorEditForm = this.formBuilder.group({
      'nome'     : [null, [Validators.required, Validators.minLength(3)]],
      'cpf'      : [null, Validators.required],
      'email'    : [null, [Validators.required, Validators.email]],
      'idade'    : [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      'telefone' : [null, Validators.required],
      'setor'    : [null, Validators.required]
     });

     this.setoresService.getSetores().subscribe(res => this.setores = res)
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