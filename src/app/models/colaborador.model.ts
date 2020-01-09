import { Setor } from './setor.model';

export class Colaborador {
    id: string;
	nome: string ;
    cpf: string;
	email: string;
    telefone: string;
	setor: Setor;
	idade: number;
}