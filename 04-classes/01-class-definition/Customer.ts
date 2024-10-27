class Customer {
  private _firstName: string;
  private _lastName: string;

  constructor(theFirst: string, theLast: string) {
    this._firstName = theFirst;
    this._lastName = theLast;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }
}

// Create an instance of the Customer class
let myCustomer = new Customer("Susan", "Didi");
console.log("Original first name: " + myCustomer.firstName); // Get the first name using the getter

myCustomer.firstName = "Dana"; // Change the first name useing the setter
console.log("Modified first name: " + myCustomer.firstName); // Get the modified first name using the getter
