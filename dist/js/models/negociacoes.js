export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adcionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        return this.negociacoes;
    }
}
/*const negociacoes = new Negociacoes();
negociacoes.listar().forEach(n => {
    n.
})*/ 
