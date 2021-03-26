//KOD 1-------------------------------------------------------------
let cars = ['volvo', 'saab', 'bmw', 'tesla'];
for (car in cars) {
    console.log(cars[car]);
}

//KOD 2---------------------------------------------------------------
let cars = ['volvo', 'saab', 'bmw', 'tesla'];
let fruits = ['apple', 'banana', 'orange'];

cars.forEach(car => console.log(car));
fruits.forEach(fruit => console.log(fruit));

// //KOD 3 --------------------------------------------------------------
let flowers = ['rose', 'tulip', 'lily', 'orchid'];

function printFlowers(flowers) {
    for (let i = 0; i < flowers.length; i++) { 
        console.log(flowers[i]);
    }
}
printFlowers(flowers);