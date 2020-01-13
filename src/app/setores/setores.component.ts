import { Observable } from 'rxjs';
import { Setor } from '../models/setor.model';
import { SetoresService } from '../services/setores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setores',
  templateUrl: './setores.component.html'
})
export class SetoresComponent implements OnInit {

  setores: Setor[] =[];

  constructor(private setoresService: SetoresService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.setoresService.getSetores().subscribe(res => this.setores = res);
  }

}
