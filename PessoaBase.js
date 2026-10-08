export class PessoaBase{
    #nome;
    #cpf;
    #email;
    constructor(nome, cpf, email){
        if(new.target === PessoaBase){
            throw new Error("ERR_CLASSE_ABSTRATA");
        }
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }

    set nome(nomeDigitado){
        if(typeof nomeDigitado !== 'string' || nomeDigitado.trim().length === " "){
            throw new Error("ERR_NOME_VAZIO");
        }
    }

    set cpf(cpfDigitado){
        if(typeof cpfDigitado !== 'number' || isNaN(cpfDigitado)){
            throw new Error("ERR_CPF_INVALIDO");
        }
    }

    set email(emailDigitado){
        if(typeof emailDigitado !== 'string' || !emailDigitado.includes('@')){
            throw new Error("ERR_EMAIL_INVALIDO");
        }
    }
}
