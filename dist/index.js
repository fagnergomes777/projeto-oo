"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_js_1 = require("./classes/carro.js");
const pajero = new carro_js_1.Carro('Pajero', 'Mitsubishi', 2019, 'Prata', 20000);
const hilux = new carro_js_1.Carro('Hilux', 'Toyota', 2019, 'Branca', 150000);
console.log(pajero.fabricante);
console.log(hilux.fabricante);
