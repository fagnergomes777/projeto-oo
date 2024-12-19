
export class BombaCombustivel {
    private _tipoCombustivel: string;
    private _valorLitro: number;
    private _quantidadeCombustivel: number;

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
        this._tipoCombustivel = tipoCombustivel;
        this._valorLitro = valorLitro;
        this._quantidadeCombustivel = quantidadeCombustivel;
    }

    public get tipoCombustivel(): string {
        return this._tipoCombustivel;
    }

    public get valorLitro(): number {
        return this._valorLitro;
    }

    public get quantidadeCombustivel(): number {
        return this._quantidadeCombustivel;
    }

    public set tipoCombustivel(tipoCombustivel: string) {
        this._tipoCombustivel = tipoCombustivel;
    }

    public set valorLitro(valorLitro: number) {
        this._valorLitro = valorLitro;
    }

    public set quantidadeCombustivel(quantidadeCombustivel: number) {
        this._quantidadeCombustivel = quantidadeCombustivel;
    }

    public abastecerPorValor(valor: number): number {
        const litrosAbastecidos = valor / this._valorLitro;
        if (litrosAbastecidos > this._quantidadeCombustivel) {
            throw new Error(`Não há combustível suficiente. Quantidade disponível: ${this._quantidadeCombustivel} litros.`);
        }

        this._quantidadeCombustivel -= litrosAbastecidos;
        console.log(`Abastecido ${litrosAbastecidos.toFixed(2)} litros. Valor total: R$ ${valor.toFixed(2)}`);
        return litrosAbastecidos;
    }

    public abastecerPorLitro(litros: number): number {
        const valorTotal = litros * this._valorLitro;
        if (litros > this._quantidadeCombustivel) {
            throw new Error(`Não há combustível suficiente. Quantidade disponível: ${this._quantidadeCombustivel} litros.`);
        }

        this._quantidadeCombustivel -= litros;
        console.log(`Abastecido ${litros.toFixed(2)} litros. Valor total: R$ ${valorTotal.toFixed(2)}`);
        return valorTotal;
    }

    public alterarValor(valor: number): void {
        if (valor <= 0) {
            throw new Error(`Valor inválido. O valor do litro não pode ser menor ou igual a zero.`);
        }
        this._valorLitro = valor;
        console.log(`Novo valor do litro de combustível: R$ ${valor.toFixed(2)}`);
    }

    public alterarCombustivel(tipo: string): void {
        this._tipoCombustivel = tipo;
        console.log(`Novo tipo de combustível: ${tipo}`);
    }

    public alterarQuantidadeCombustivel(quantidade: number): void {
        if (quantidade < 0) {
            throw new Error(`Quantidade de combustível não pode ser negativa.`);
        }
        this._quantidadeCombustivel = quantidade;
        console.log(`Nova quantidade de combustível: ${quantidade.toFixed(2)} litros`);
    }
}

export function testeBombaCombustivel() {

    const bomba = new BombaCombustivel("Gasolina", 5.0, 100);

    bomba.abastecerPorValor(50);

    bomba.abastecerPorLitro(10);

    bomba.alterarValor(5.5);

    bomba.alterarCombustivel("Etanol");

    bomba.alterarQuantidadeCombustivel(200);
    
    bomba.abastecerPorValor(100);
}
