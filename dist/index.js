"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_js_1 = require("./classes/conta.js");
const irineu = new conta_js_1.Conta(1, 'Irineu', 50);
console.log(irineu.saldo);
irineu.sacar(10000);
console.log(irineu.saldo);
