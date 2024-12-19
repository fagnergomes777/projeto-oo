
export class Macaco {

    private _nome: string;
    private _bucho: string[];

    constructor(nome: string) {
        this._nome = nome;
        this._bucho = [];
    }

    public comer(alimento: string): void {
        if (alimento.toLowerCase() === this._nome.toLowerCase()) {
            console.log(`${this._nome} não pode comer a si mesmo!`);
            return;
        }
        this._bucho.push(alimento);
        console.log(`${this._nome} comeu ${alimento}`);
    }

    public verBucho(): void {
        if (this._bucho.length === 0) {
            console.log(`${this._nome} está com o bucho vazio.`);
        } else {
            console.log(`${this._nome} tem os seguintes alimentos no bucho: ${this._bucho.join(", ")}`);
        }
    }

    public digerir(): void {
        if (this._bucho.length === 0) {
            console.log(`${this._nome} não tem nada no bucho para digerir.`);
        } else {
            this._bucho = [];
            console.log(`${this._nome} digeriu toda a comida.`);
        }
    }

    public get nome(): string {
        return this._nome;
    }
}

