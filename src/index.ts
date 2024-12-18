import { Carro } from './classes/carro.js';
import { Conta } from './classes/conta.js';

const irineu = new Conta(1, 'Irineu', 50);

console.log(irineu.saldo);

irineu.sacar(10000);

console.log(irineu.saldo);