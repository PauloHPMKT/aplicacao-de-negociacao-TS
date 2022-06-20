export class Negociacao {
    //explicitando o tipo do modificador no construtor da classe isso indica para o TS que 
    //ele criará uma propriedade em sua classe com o mesmo nome do parametro de seu construtor
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //programação defensiva: getter cria um clone protegendo o conteudo da propriedade
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
