
export class Carro {

    // metodo construtor e atributos
    constructor(
        public modelo: string,
        public _fabricante: string,
        public ano: number,
        public cor: string,
        public preco: number) {}

// metodo get
    get fabricante() {
        return this._fabricante.toUpperCase();
    }
}
