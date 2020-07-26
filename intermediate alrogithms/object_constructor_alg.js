var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = () => { return firstAndLast; };
    this.getFirstName = () => { return firstAndLast.split(" ")[0]; };
    this.getLastName = () => { return firstAndLast.split(" ")[1]; };
    this.setFullName = (fullName) => { firstAndLast = fullName; };
    this.setFirstName = (firstName) => {
        firstAndLast = firstAndLast.split(" ");
        // asssigning firstAndLast equal to itself but split into an array to manipulate the data
        firstAndLast.splice(0, 1, firstName);
        // splicing (removing) the first index (first name) from the array and replacing it with the value of the parameter (firstName)
        firstAndLast = firstAndLast.join(" ");
        // assigning firstAndLast again to the manipulated array with the new first name and joining (concatenating) them together into a string
        // then when any "get..." method is ran it will use the newly set value of firstAndLast when called after this "set..." method
    };
    this.setLastName = (lastName) => {
        firstAndLast = firstAndLast.split(" ");
        firstAndLast.splice(1, 1, lastName);
        firstAndLast = firstAndLast.join(" ");
    };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
bob.setFullName("John Tyler");
bob.setFirstName("John");
bob.setLastName("Tyler");
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());