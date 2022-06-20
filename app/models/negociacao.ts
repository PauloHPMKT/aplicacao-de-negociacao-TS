export class Negociacao {

    //explicitando o tipo do modificador no construtor da classe isso indica para o TS que 
    //ele criará uma propriedade em sua classe com o mesmo nome do parametro de seu construtor
    constructor (
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    //programação defensiva: getter cria um clone protegendo o conteudo da propriedade
    get data(): Date {
        const data = new Date(this._data.getTime())
        return data;
    }

    //criando geters para acessar os atributos privados da classe
    //valores substituidos por valores readonly no constructor
    /*get data(): Date {
        return this._data
    }
    
    get quantidade(): number {
        return this._quantidade
    }
    
    get valor(): number {
        return this._valor
    }*/
}    



