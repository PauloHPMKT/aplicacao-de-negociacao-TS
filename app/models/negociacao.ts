export class Negociacao {

    //explicitando o tipo do modificador no construtor da classe isso indica para o TS que 
    //ele criará uma propriedade em sua classe com o mesmo nome do parametro de seu construtor
    constructor (
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
    ) {}

    //criando geters para acessar os atributos privados da classe
    get data(): Date {
        return this._data
    }
    
    get quantidade(): number {
        return this._quantidade
    }
    
    get valor(): number {
        return this._valor
    }
}    



