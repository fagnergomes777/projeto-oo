"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    modelo;
    _fabricante;
    ano;
    cor;
    preco;
    // metodo construtor e atributos
    constructor(modelo, _fabricante, ano, cor, preco) {
        this.modelo = modelo;
        this._fabricante = _fabricante;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
    }
    // metodo get
    get fabricante() {
        return this._fabricante.toUpperCase();
    }
}
exports.Carro = Carro;
