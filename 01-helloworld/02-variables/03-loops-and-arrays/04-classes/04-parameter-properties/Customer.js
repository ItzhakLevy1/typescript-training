"use strict";
class Customer {
    // Parameter Properties Shortcut instead of the old constructor structor
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// Creating an instance of the class
let myCustomer = new Customer("Martin1", "Dixon1");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
