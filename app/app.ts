import { NegociacaoController } from "./controllers/negociacao.controller.js";

const controller = new NegociacaoController()

const form = document.querySelector('form');

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    controller.adicionar();
});