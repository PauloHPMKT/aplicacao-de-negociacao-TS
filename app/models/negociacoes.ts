import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes:Negociacao[] = [];
    
    adcionar(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    listar(): readonly Negociacao[] {
        return this.negociacoes;
    }
}

/*const negociacoes = new Negociacoes();
negociacoes.listar().forEach(n => {
    n.
})*/