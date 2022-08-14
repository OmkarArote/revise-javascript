// Chapter 1 : Q1
let a = 'Suman';
let b = 27;
console.log(a + b);

// Chapter 1 : Q2
console.log(typeof (a + b));

// Chapter 1 : Q3
const siddhi = {
  name: 'Siddhi',
  age: 22,
  isGrad: true,
};
console.log('Is Siddhi Graguate?: ' + siddhi.isGrad);
// siddhi = 22; //A const object cannot be changed

// Chapter 1 : Q4
siddhi['isBlind'] = true;
console.log('Is Siddhi Andhi?: ' + siddhi.isBlind);

// Chapter 1 : Q4
let dict = {
  galvanize: 'To startle into sudden activity',
  liberation:
    'The act or fact of gaining equal rights or full social or economic opportunities for a particular group.',
  suffrage: 'The right to vote, especially in a political election.',
};
console.log('Word Dictionary Object:');
console.log(dict);
