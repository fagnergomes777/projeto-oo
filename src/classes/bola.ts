
export class Bola {

    constructor(
        private _cor: string, 
        private _circunferencia: number, 
        private _material: string) {
            this.cor = _cor;
            this.circunferencia = _circunferencia;
            this.material = _material;
        }

    public get cor(): string {
        return this._cor.toUpperCase();
    }

    public get circunferencia(): number {
        return this._circunferencia;
    }

    public get material(): string {
        return this._material.toUpperCase();
    }

    public set cor(cor: string) {
        this._cor = cor.trim().toLowerCase();
    }

    public set circunferencia(circunferencia: number) {
        if (circunferencia <= 0) {
            throw new Error('Circunferência inválida');
        }
        this._circunferencia = circunferencia;
    }

    public set material(material: string) {
        this._material = material.trim().toLowerCase();
    }

    toString(): string {
        return `Cor: ${this.cor}, Circunferência: ${this.circunferencia}, Material: ${this.material}`;
    }

    public trocaCor(novaCor: string): void {
        this.cor = novaCor;
    }

}
