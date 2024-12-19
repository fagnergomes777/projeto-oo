
export class BichinhoVirtual {

    constructor(
        private _nome: string,
        private _fome: number = 50,
        private _saude: number = 50,
        private _idade: number = 0
    ) {}

    public get nome(): string {
        return this._nome;
    }

    public get fome(): number {
        return this._fome;
    }

    public get saude(): number {
        return this._saude;
    }

    public get idade(): number {
        return this._idade;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public set fome(fome: number) {
        if (fome < 0) this._fome = 0;
        else if (fome > 100) this._fome = 100;
        else this._fome = fome;
    }

    public set saude(saude: number) {
        if (saude < 0) this._saude = 0;
        else if (saude > 100) this._saude = 100;
        else this._saude = saude;
    }

    public set idade(idade: number) {
        this._idade = idade;
    }

    public alimentar(fome: number): void {
        this.fome -= fome;
        if (this.fome < 0) this.fome = 0;
    }

    public medicar(saude: number): void {
        this.saude += saude;
        if (this.saude > 100) this.saude = 100;
    }

    public envelhecer(): void {
        this.idade += 1;
        if (this.idade < 21) {
            this._fome += 2;
            this._saude -= 1;
        }
    }

    public get humor(): string {
        if (this._fome > 70 && this._saude < 30) {
            return "Feliz!";
        } else if (this._fome <= 30 && this._saude >= 70) {
            return "Triste!";
        } else {
            return "Neutro!";
        }
    }

    public exibirEstado(): string {
        return `Nome: ${this._nome}, Idade: ${this._idade}, Fome: ${this._fome}, Saúde: ${this._saude}, Humor: ${this.humor}`;
    }
}
