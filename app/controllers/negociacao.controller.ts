import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes(); // instanciando a classe não há necessidade de explicitar o tipo 

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adicionar(): void {
        const negociacao = this.criaNegociacao();
        negociacao.data.setDate(12);
        this.negociacoes.adcionar(negociacao);
        console.log(this.negociacoes.listar());
        this.limparFormulario();
    }
    
    criaNegociacao(): Negociacao {
        const exp = /-/g; //criando uma expressao regular
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        
        return new Negociacao(date, quantidade, valor);

    }

    limparFormulario(): void {
       this.inputData.value = '';
       this.inputQuantidade.value = '';
       this.inputValor.value = '';
       this.inputData.focus();
    }
}