
export class Quadrado {

    constructor(
        private _lado: number) {
            this.lado = _lado;
        }

    public get lado(): number {
        return this._lado;
    }

    public set lado(lado: number) {
        if (lado <= 0) {
            throw new Error('O lado do quadrado deve ser maior que 0');
        }
        this._lado = lado;
    }

    public calcularArea(): number {
        return this._lado * this._lado;
    }

    public mostrarLado(): string {
        return `Lado do quadrado: ${this.lado}`;
    }

    toString(): string {
        return `Lado: ${this.lado}, Área: ${this.calcularArea()}`;
    }
}
