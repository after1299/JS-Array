let friends = ["John", "Sandy", "Alex"]
console.log(friends[1]);
console.log(friends.length);

// push
friends.push("Harry");
console.log(friends);
console.log(friends.length);

// pop
friends.pop();
console.log(friends);

// shift
friends.shift();
console.log(friends);

//unshift
friends.unshift("Harry");
console.log(friends);

//Object
let Peter = {
    //properties setting
    firstName: "Peter",
    lastName: "Hsiao",
    age: 22,
    //method setting
    sayHi() {
        console.log("Peter says hi");
    },
    walk(palce) {
        console.log("Peter is walking on the " + palce);
    }
};
console.log(Peter.age);
Peter.sayHi();
Peter.walk("street");


//Math Object
// Math.PI
console.log(Math.PI);

// Math.pow
let n1 = Math.pow(2, 5);
let n2 = Math.pow(2, 10);
console.log(n1);
console.log(n2);

// Math.random
for (let i = 0; i < 5; i++) {
    console.log(Math.random());
}

// Math.sqrt
console.log(Math.sqrt(64));

console.log(Math.floor(1.39999999999999999999));
console.log(Math.ceil(1.39999999999999999999))