import { PessoaBase } from "./PessoaBase.js";
export class Professor extends PessoaBase{
    #salario;

    constructor(nomeProfessor, cpfProfessor, emailProfessor, salarioProfessor, titulacaoProfessor){
        super(nomeProfessor, cpfProfessor, emailProfessor);
        this.salario = salarioProfessor;
        this.titulacao = titulacaoProfessor;
    }

    set salario(salarioDigitado){
        if(typeof salarioDigitado !== 'number');

        if(salarioDigitado < 1500){
            throw new Error("ERR_SALARIO_BASE");
        }
    }
}