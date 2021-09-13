// O TypeScript não consegue inferir nada além de HTMLElement
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

// Os type assertions não afetam o código em runtime, apenas as verificações do arquivo

interface T {
  id: number,
}

let expr;
// Caso dê algum erro ao utilizar o alias (as), fazer duas conversões
// const a = expr as T;
const a = (expr as any) as T;

// Tipos literais
let string1 = "Hello World";
string1 = "Olá Mundo"; // Mostra String quando hover

const string2 = "Hello World"; // Mostra o valor (tipo literal), porque uma constante é somente aquele valor declarado


// Tipos literais só tem bom uso quando usando UNIONS (operador "|")

// Só aceita um valor: sem uso prático
let saudacao: "hello" = "hello";

// Unions
// Aceita um leque de valores pré definidos
// Os unions podem ser configurados usando interfaces e tipos também
function printText(s: string, alignment: "left" | "right" | "center") {

}