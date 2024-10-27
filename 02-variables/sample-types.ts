let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Anup";
let lastName: string = "Kumar";

console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);

let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

sports.push("Baseball");
sports.push("Football");

for (let i = 0; i < sports.length; i++) {
  console.log(sports[i]);
}

for (let tempSport of sports) {
  console.log(`All From the second loop : ${tempSport}`);
  if (tempSport === "Golf") {
    console.log(`My favorit is : ${tempSport}`);
  }
}
