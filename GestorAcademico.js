import { Aluno } from './Aluno.js';
import { Professor } from './Professor.js';

export class GestorAcademico{
    arrayAlunos = [];
    arrayProfessores = [];

    cadastrarAluno(nome, cpf, email, idade, curso){
        try{

        const aluno = new Aluno(nome, cpf, email, idade, curso);
        this.arrayAlunos.push(aluno);
        console.log("Aluno " + nome + " cadastrado com sucesso!");

        } catch(erro){
            console.log(`Erro ao cadastrar aluno: ${erro.message}`);

        } finally{
            console.log("Processo de cadastro do aluno finalizado.");

        }
    }

    cadastrarProfessor(nome, cpf, email, salario, titulacao){
        try{

            const profesor = new Professor(nome, cpf, email, salario, titulacao);
            this.arrayProfessores.push(professor);
            console.log("Professor " + nome + "cadastrado com sucesso!");

        } catch(erro){
            console.log(`Erro ao cadastrar professor: ${erro.message}`);
            
        } finally{
            console.log("Processo de cadastro do professor finalizado.");
        }
    }


    traduzirErroParaOCliente(erro){
        switch (erro) {
            case "ERR_CLASSE_ABSTRATA":
                console.log("AVISO: Não é possivel cadastrar uma Pessoa genérica no sistema.");
                break;

            case "ERR_NOME_VAZIO":
                console.log("AVISO: O campo de nome é obrigatório e não pode ficar em branco.");
                break;

            case "ERR_CPF_INVALIDO":
                console.log("AVISO: O CPF informado é inválido. Digite exatamente 11 números sem formatação.");
                break;
                
            case "ERR_EMAIL_INVALIDO":
                console.log("AVISO: O endereço de e-mail deve conter um formato válido (ex: nome@dominio.com).");
                break;

            case "ERR_IDADE_MINIMA":
                console.log("AVISO: O aluno deve ter no mínimo 14 anos para efetuar a matrícula no SENAI.");
                break;

            case "ERR_SALARIO_BASE":
                console.log("AVISO: O sálario registrado não pode ser inferior ao pisp da categoria (R$ 1500,00).");
                break;

                default:
                    console.log("AVISO SISTÊMICO:: Falha no processamento dos dados. Tente novamente.");
                    
        }
    }
}
