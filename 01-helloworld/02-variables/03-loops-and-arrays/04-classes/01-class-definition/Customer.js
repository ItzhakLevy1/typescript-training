var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (theFirst) {
        this.firstName = theFirst;
    };
    return Customer;
}());
// Create an instance of the Customer class
var myCustomer = new Customer("Martin", "Dixon");
console.log("Original first name: " + myCustomer.getFirstName()); // Get the first name using the getter
myCustomer.setFirstName("Greg"); // Change the first name useing the setter
console.log("Modified first name: " + myCustomer.getFirstName()); // Get the modified first name using the getter
