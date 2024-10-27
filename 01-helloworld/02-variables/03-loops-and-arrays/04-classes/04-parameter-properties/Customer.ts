class Customer {
  // Parameter Properties Shortcut instead of the old constructor structor
  constructor(private _firstName: string, private _lastName: string) {}

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }
}

// Creating an instance of the class
let myCustomer = new Customer("Martin1", "Dixon1");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
