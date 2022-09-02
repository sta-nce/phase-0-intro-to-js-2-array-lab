// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
   return cats.push(name);
}

destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat() {
    return cats.pop();
}

destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
   return cats.shift();
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
