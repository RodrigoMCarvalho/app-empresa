import { Colaborador } from './../colaboradores/colaborador.model';

export class Setor {
    id: string;
    descricao: string;
    colaboradores: Colaborador[];
}