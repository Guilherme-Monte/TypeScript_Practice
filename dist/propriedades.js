function printName(obj) {
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
    console.log(obj.last?.toUpperCase());
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    }
    else {
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople(["Fella", "Outro Fella", "Outro Fella"]);
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree([1, 2, 3, 4, 5]));
