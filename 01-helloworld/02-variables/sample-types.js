var found = true;
var grade = 88.6;
var firstName = "Anup";
var lastName = "Kumar";
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
var sports = ["Golf", "Cricket", "Tennis", "Swimming"];
sports.push("Baseball");
sports.push("Football");
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    console.log("All From the second loop : ".concat(tempSport));
    if (tempSport === "Golf") {
        console.log("My favorit is : ".concat(tempSport));
    }
}
