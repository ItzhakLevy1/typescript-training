var reviews = [5, 5, 4.5, 1, 4];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var avarage = total / reviews.length;
console.log("Reviews avarage = ".concat(avarage));
