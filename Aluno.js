import { StatusMatriculaEnum } from './Dominio.js';
import { PessoaBase } from "./PessoaBase.js";
export class Aluno extends PessoaBase{
    #idade;

    constructor(nomeAluno, cpfAluno, emailAluno, idadeAluno, cursoAluno){
        super(nomeAluno, cpfAluno, emailAluno);
        this.idade = idadeAluno;
        this.curso = cursoAluno;
        this.statusMatricula = StatusMatriculaEnum.ATIVA;
    }

    set idade(idadeDigitada){

        if(typeof idadeDigitada !== 'number');

        if(idadeDigitada < 14 || idadeDigitada > 120){
            throw new Error("ERR_IDADE_MINIMA");
        }
    }
}