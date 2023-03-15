// let nam1, nam2;
// nam1 = parseInt(prompt("Enter a number less than or equal 5"));
// while (nam1 > 5) {
//     nam1 = parseInt(prompt("Enter a number less than or equal 5"));
// }
// nam2 = parseInt(prompt("Enter a number greater than 5"));
// while (nam2 <= 5) {
//     nam2 = parseInt(prompt("Enter a number greater than 5"));
// }
// for (nam1; nam1 <= nam2; nam1++) {
//     console.log(nam1);
// }

var associateArray = { "a": 200, "b": 300 };
// console.log(associateArray);
var app = [1, 2, 3, 4, 5];
console.log(app.join("/"));

var iphone = [...app, 6, 7];
console.log(iphone);

var aung = [3, 4, 9, 10, 3]
var rea = aung.map(function(n) {
    return n * 3;
})
console.log(rea);

var car = new Object();
car.name = "Ipesom";
car.price = 300;
console.log(car.price + car.name);

// Constructor
function fruit(name, price) {
    this.name1 = name;
    this.price1 = price;
    this.get = function() {
        return `This fruit is ${this.name1} that is cost ${this.price1}`
    }
}
var result1 = new fruit("apple", "500ks");
console.log(result1.price1);
console.log(result1.get());

// prototype
function family(name, age, work) {
    this.name = name;
    this.age = age;
    this.work = work;
}
family.prototype.about = function() {
    return `${this.name} is ${this.age} years old now.`;
}
family.prototype.job = function() {
    return `He is a ${this.work}.`;
}
var member = new family("U Soe Oo", 58, "doctor");
console.log(member.about());
console.log(member.job());

var year = new Date();
var year1 = new Date().getDate();
console.log(year1);

const shop = {
    title: "UK",
    price: 200000,
};
var shopee = Object.create(shop, {
    title: { value: 4000 }
});
console.log(shopee);