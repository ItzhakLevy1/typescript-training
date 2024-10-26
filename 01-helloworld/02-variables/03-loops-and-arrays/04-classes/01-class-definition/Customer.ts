class Customer {

    firstName: string;
    lastName: string;

    constructor (theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// Create an instance of the Customer class
let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);