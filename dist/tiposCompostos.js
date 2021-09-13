const teste = {
    name: "teste",
    id: 123
};
function getLength(obj) {
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
const testeArray = ["texto 0"];
;
function logPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
const point = { x: 12, y: 26 };
logPoint(point);
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);
const bear = { name: "Alfredo", honey: true };
bear.name;
bear.honey;
