var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// Create an instance of the Customer class
var myCustomer = new Customer("Susan", "Didi");
console.log("Original first name: " + myCustomer.firstName); // Get the first name using the getter
myCustomer.firstName = "Dana"; // Change the first name useing the setter
console.log("Modified first name: " + myCustomer.firstName); // Get the modified first name using the getter
