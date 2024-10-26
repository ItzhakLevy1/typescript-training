class Customer {
  private firstName: string;
  private lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(theFirst: string): void {
    this.firstName = theFirst;
  }
}

// Create an instance of the Customer class
let myCustomer = new Customer("Martin", "Dixon");
console.log("Original first name: " + myCustomer.getFirstName()); // Get the first name using the getter

myCustomer.setFirstName("Greg"); // Change the first name useing the setter
console.log("Modified first name: " + myCustomer.getFirstName()); // Get the modified first name using the getter
