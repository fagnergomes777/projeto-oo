
export class Pessoa {
    constructor(
        private _nome: string,
        private _idade: number,
        private _peso: number,
        private _altura: number
    ) {
        this.nome = _nome;
        this.idade = _idade;
        this.peso = _peso;
        this.altura = _altura;
    }

    public get nome(): string {
        return this._nome;
    }

    public get idade(): number {
        return this._idade;
    }

    public get peso(): number {
        return this._peso;
    }

    public get altura(): number {
        return this._altura;
    }

    public set nome(nome: string) {
        this._nome = nome.trim();
    }

    public set idade(idade: number) {
        if (idade < 0 || idade > 150) {
            throw new Error('Idade inválida');
        }
        this._idade = idade;
    }

    public set peso(peso: number) {
        if (peso <= 0) {
            throw new Error('Peso inválido');
        }
        this._peso = peso;
    }

    public set altura(altura: number) {
        if (altura <= 0) {
            throw new Error('Altura inválida');
        }
        this._altura = altura;
    }

    public envelhecer(): void {
        if (this.idade < 21) {
            this.altura += 0.5;
        }
        this.idade++;
    }

    public engordar(pesoGanho: number): void {
        if (pesoGanho <= 0) {
            throw new Error('Peso ganho inválido');
        }
        this.peso += pesoGanho;
    }

    public emagrecer(pesoPerdido: number): void {
        if (pesoPerdido <= 0 || pesoPerdido > this.peso) {
            throw new Error('Peso perdido inválido');
        }
        this.peso -= pesoPerdido;
    }

    public crescer(alturaGanha: number): void {
        if (alturaGanha <= 0) {
            throw new Error('Altura ganha inválida');
        }
        this.altura += alturaGanha;
    }

    toString(): string {
        return `Nome: ${this.nome}, Idade: ${this.idade} anos, Peso: ${this.peso} kg, Altura: ${this.altura} cm`;
    }
}
