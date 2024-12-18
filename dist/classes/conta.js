"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    _numero;
    _titular;
    _saldo;
    constructor(_numero, _titular, _saldo) {
        this._numero = _numero;
        this._titular = _titular;
        this._saldo = _saldo;
    }
    get numero() {
        return this._numero;
    }
    get titular() {
        return this._titular;
    }
    get saldo() {
        return this._saldo;
    }
    set numero(numero) {
        this._numero = numero;
    }
    set titular(titular) {
        this.titular = titular;
    }
    depositar(valor) {
        if (valor <= 0) {
            throw new Error(`Valor R$ ${valor} para depósito inválido`);
        }
        this._saldo += valor;
        return this._saldo;
    }
    sacar(valor) {
        if (valor <= 0) {
            throw new Error(`Valor R$ ${valor} para saque inválido`);
        }
        if (this._saldo < valor) {
            throw new Error(`Saldo insuficiente para saque de R$ ${valor}`);
        }
        this._saldo -= valor;
        return this._saldo;
    }
}
exports.Conta = Conta;