import { Carro } from './classes/carro.js';


const pajero = new Carro('Pajero', 'Mitsubishi', 2019, 'Prata', 20000);

const hilux = new Carro('Hilux', 'Toyota', 2019, 'Branca', 150000);

console.log(pajero.fabricante);
console.log(hilux.fabricante);