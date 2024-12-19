
export class TV {

    constructor(
        private _canal: number = 1,
        private _volume: number = 10
    ) {}

    public get canal(): number {
        return this._canal;
    }

    public get volume(): number {
        return this._volume;
    }

    public set canal(canal: number) {
        if (canal < 1 || canal > 999) {
            throw new Error("Canal inválido. O número do canal deve ser entre 1 e 999.");
        }
        this._canal = canal;
    }

    public set volume(volume: number) {
        if (volume < 0 || volume > 100) {
            throw new Error("Volume inválido. O volume deve estar entre 0 e 100.");
        }
        this._volume = volume;
    }

    public aumentarVolume(): void {
        if (this._volume < 100) {
            this._volume++;
        } else {
            console.log("Volume já está no máximo!");
        }
    }

    public diminuirVolume(): void {
        if (this._volume > 0) {
            this._volume--;
        } else {
            console.log("Volume já está no mínimo!");
        }
    }

    public mudarCanal(canal: number): void {
        this.canal = canal;
    }

    public exibirEstado(): string {
        return `Canal atual: ${this._canal}, Volume: ${this._volume}`;
    }
}
