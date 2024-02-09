const name = "Peter";

const second = name.substring(2, 3);

const upperSecond = second.toUpperCase();

console.log(upperSecond);

console.log(name);

const first = name.substring(0, 2);

const lowerFirst = first.toLowerCase();

const joined = lowerFirst + upperSecond;

console.log(joined)

const third = name.substring(3, 5);
const lowerThird = third.toLowerCase();

const doublejoined = lowerFirst + upperSecond + lowerThird;

console.log(doublejoined)

