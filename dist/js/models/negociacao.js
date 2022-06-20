export class Negociacao {
    //explicitando o tipo do modificador no construtor da classe isso indica para o TS que 
    //ele criará uma propriedade em sua classe com o mesmo nome do parametro de seu construtor
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    //criando geters para acessar os atributos privados da classe
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}
