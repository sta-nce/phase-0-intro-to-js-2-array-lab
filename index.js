// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat() {
    cats.pop();
}

destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    cats.shift();
}

destructivelyRemoveFirstCat();

function appendCat(name) {
    const newCats = [...cats,name];
    return newCats;
}

function prependCat(name) {
    const preNewCats = [name,...cats];
    return preNewCats;
}

function removeFirstCat(){
    return cats.slice(1);
}

function removeLastCat(){
    return cats.slice(0, cats.length-1);
}
