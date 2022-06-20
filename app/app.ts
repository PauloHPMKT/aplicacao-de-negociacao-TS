import { Negociacao } from "./models/negociacao.js"

const negociacao = new Negociacao(new Date(), 10, 100, 1000)
console.log(negociacao.volume)
