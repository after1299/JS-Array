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
