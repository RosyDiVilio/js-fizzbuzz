'use strict'

let three = 'Fizz';
let five = 'Buzz';
let threeFive = 'FizzBuzz';

for (let i = 1; i <= 100; i++) {

    console.log(i);

    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(threeFive);
    } else if (i % 3 === 0) {
        console.log(three);
    } else if (i % 5 === 0) {
        console.log(five);
    }
}