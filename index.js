import { GestorAcademico } from './GestorAcademico.js';
import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from "process";
const rl = readline.createInterface({input, output});
const cadastro = new GestorAcademico();


async function sistemaRodando(){
let sistemaRodando = true
    while(sistemaRodando){
        
        console.log("Escolha a opção desejada:");
        console.log("1- Matricular Aluno");
        console.log("2- Cadastrar Professor");
        console.log("3- Buscar Cadastro (por CPF)");
        console.log("4- Sair do Sistema");

        const opcaoEscolhida = await rl.question("Digite a opção desejada: ");
        

        switch(opcaoEscolhida){
            case "1":
                const nomeAluno = await rl.question("Digite o nome do aluno: ");
                const cpfAluno = parseInt(await rl.question("Digite o CPF do aluno: "));
                const emailAluno = await rl.question("Digite o e-mail do aluno: ");
                const idadeAluno = parseInt(await rl.question("Digite a idade do aluno: "));
                const cursoAluno = await rl.question("Digite o curso do aluno: ");
                cadastro.cadastrarAluno(nomeAluno, cpfAluno, emailAluno, idadeAluno, cursoAluno);
                break;
               
            case "2":
                const nomeProfessor = await rl.question("Digite o nome do professor: ");
                const cpfProfessor = parseInt(await rl.question("Digite o CPF do professor: "));
                const emailProfessor = await rl.question("Digite o e-mail do professor: ");
                const salarioProfessor = parseInt(await rl.question("Digite o salário do professor: "));
                const titulacaoProfessor = await rl.question("Digite a titulação do professor: ");
                cadastro.cadastrarProfessor(nomeProfessor, cpfProfessor, emailProfessor, salarioProfessor, titulacaoProfessor);
                break;

            case "3":
                const cpfBuscar = parseInt(await rl.question("Digite o CPF do aluno ou professor que deseja buscar: "));
                break;

            case "4":
                console.log("Saindo do sistema...");
                sistemaRodando = false;
                break;
            
        }
    }
}
sistemaRodando();