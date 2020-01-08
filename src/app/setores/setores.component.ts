import { Observable } from 'rxjs';
import { Setor } from './setor.model';
import { SetoresService } from './setores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.scss']
})
export class SetoresComponent implements OnInit {

  selected = 'option2';

  setores: Setor[] =[];

  constructor(private setoresService: SetoresService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.setoresService.getSetores().subscribe(res => this.setores = res);
  }

}
