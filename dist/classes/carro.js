"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    _modelo;
    _fabricante;
    _ano;
    _cor;
    _preco;
    // metodo construtor e atributos
    constructor(_modelo, _fabricante, _ano, _cor, _preco) {
        this._modelo = _modelo;
        this._fabricante = _fabricante;
        this._ano = _ano;
        this._cor = _cor;
        this._preco = _preco;
        this.modelo = _modelo;
        this.fabricante = _fabricante;
        this.ano = _ano;
        this.cor = _cor;
        this.preco = _preco;
    }
    // metodo get
    get modelo() {
        return this._modelo.toUpperCase();
    }
    get fabricante() {
        return this._fabricante.toUpperCase();
    }
    get ano() {
        return this._ano;
    }
    get cor() {
        return this._cor.toUpperCase();
    }
    get preco() {
        return this._preco;
    }
    // metodo set
    set modelo(modelo) {
        this._modelo = modelo.trim().toLowerCase();
    }
    set fabricante(fabricante) {
        const tamanho = fabricante.trim().length;
        if (tamanho < 3) {
            throw new Error('Fabricante inválido');
        }
        this._fabricante = fabricante.trim().toLowerCase();
    }
    set ano(ano) {
        if (ano < 1950 || ano > 2050) {
            throw new Error('Ano inválido');
        }
        this._ano = ano;
    }
    set cor(cor) {
        this._cor = cor.trim().toLowerCase();
    }
    set preco(preco) {
        if (preco <= 0) {
            throw new Error('Preço inválido');
        }
        this._preco = preco;
    }
}
exports.Carro = Carro;
