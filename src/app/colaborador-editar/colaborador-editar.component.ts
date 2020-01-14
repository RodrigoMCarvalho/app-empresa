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
  id: string = '';
  nome: string = '';
  cpf: string = '';
  email: string ='';
  idade: number = null;
  telefone: string = '';
  setor: Setor[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder:FormBuilder,
              private colaboradorService: ColaboradoresService,
              private setoresService: SetoresService) { }

  ngOnInit() {
    this.getColaborador(this.route.snapshot.params['id']);
  
    this.colaboradorEditForm = this.formBuilder.group({
      'id'       : [null],
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
          this.isLoadingResults = false;
          this.colaboradorEditForm.setValue({
            id: data.id,
            nome: data.nome,
            cpf: data.cpf,
            email: data.email,
            idade: data.idade,
            telefone: data.telefone,
            setor: data.setor.descricao
          })
        }); 
    
  }
  //form: NgForm
  updateColaborador(colaborador: Colaborador) {
    console.log(colaborador)
    this.isLoadingResults = true;
    this.colaboradorService.updateColaborador(colaborador).subscribe( res => {
      this.isLoadingResults = false;
      this.router.navigate([`/colaborador-detalhes/` + this.colaborador.id]);
    }, (err) => {
      console.log(err);
    });
  }


}