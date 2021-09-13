type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";

const teste: User = {
  name: "teste",
  id: 123
};

// Funcionaria da mesma forma sem os tipos
function getLength(obj: string | string[]) {
  return obj.length;
}

// console.log(getLength(teste.name));
// console.log(getLength(["asd", "asd"]));

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

// console.log(wrapInArray(teste.name));
// console.log(wrapInArray(["asd", "asd"]));

// Tipos genéricos <T>
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const testeArray: StringArray = ["texto 0"];

// Interface com tipo genérico:
interface BackPack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
};

// O declare diz para o TS não se preocupar onde a constante é inicializada (chamado de contexto de ambiente)
// Nesse caso, parece ser apenas uma forma de usar as funções da interface como em OOP
declare const backpack: BackPack<string>;
// Não sei o uso disso 13/09/2021

// const object = backpack.get();
// console.log(object);

// console.log(backpack.add("23"));


// Structural Type System
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// A constante point não é do tipo Point, mas o TS compara a escrita dos dois
// Se dois objetos tem o mesmo formato, eles são considerados do mesmo tipo (mesma coisa para objetos criados por classes)
const point = { x: 12, y: 26 };
logPoint(point);
// Contanto que tenha os atributos necessários, não importa se há algo a mais
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);


// Diferenças entre declarar tipo e interface:
// Tipos não podem ser alterados após criação (aparece "erro de dúplica")
interface Animal {
  name: string
}

// type Bear = Animal & {
interface Bear extends Animal {
  honey: boolean
}

const bear: Bear = { name: "Alfredo", honey: true };
bear.name
bear.honey