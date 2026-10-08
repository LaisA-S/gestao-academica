export class ValidadorUtil{
    #cpf;
    #email;
    constructor(cpf, email){
        this.cpf = cpf;
        this.email = email;
    }

    get cpf(){
        return "***********";
    }
     set cpf(valorDigitado){
        if(typeof valorDigitado !== 'number' || isNaN(valorDigitado)){
            console.log("CPF digitado é invalido, deve conter apenas números.");
            return;
        }

        if(valorDigitado.toString().length !== 11){
            console.log("CPF digitado é inválido, deve conter 11 digitos.");
            return;
        }
        this.#cpf = valorDigitado;
    }

    set email(textoDigitado){
        if(typeof textoDigitado !== 'string' || !textoDigitado.includes('@')){
            console.log("Email digitado é inválido, deve conter '@'.");
            return;
        }
        this.#email = textoDigitado;
    }
}