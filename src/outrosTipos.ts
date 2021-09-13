// BigInt ES2020 pra cima
const exemplo: bigint = BigInt(100);
const exemplo2: bigint = 100n;

console.log(exemplo, exemplo2);

// Não pode usar Math nele
// A conversão para tipo number pode retornar um valor errado
// Comparações são feitas normalmente (olhar quanto vale 1n, 2n, etc)

// Symbol
// Sempre serão únicos
const symbol1 = Symbol("teste");
const symbol2 = Symbol("teste");

// console.log(symbol1 === symbol2);