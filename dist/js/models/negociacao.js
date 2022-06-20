export class Negociacao {
    constructor(data, quantidade, valor, volume) {
        this._data = data,
            this._quantidade = quantidade,
            this._valor = valor;
        this._volume = volume;
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
    get volume() {
        return this._quantidade * this._valor;
    }
}
