'use strict';
/*
let name2 = document.querySelector('.qwe').innerText;
name2 = prompt('Your name', name2);
console.log(name2);
if (name2) {
  document.querySelector('.qwe').innerText = name2;
}
*/

/*
function d(arr) {
  return arr.sort().reverse();
}
function al(el) {
  console.log(el);
}
let a = [2, 5, 7, 6, 1, 4];
d(a).forEach(al);

console.log(a);
*/

/*
let m = [1, 5, 8, 6, 3, 1];
let sum = 0;
for (let index = 0; index < m.length; index = index + 1) {
  sum = sum + m[index];
}
console.log(m);
console.log(sum);
*/

/*
let m = [1, 5, 8, 6, 3, 1];
let sum = 0;

m.forEach(function (el) {
  sum = sum + el;
});

console.log(m);
console.log(sum);
*/

/*
let m = [1, 5, 8, 6, 3, 1];

let sum = m.reduce(function (sum, el) {
  return sum + el * el;
}, 0);

console.log(m);
console.log(sum);
*/

/*
let user = {
  name: 'Dmitry',
  age: 44,
  country: 'pl',
  job: 'Software developer',
  experience: [
    { company: 'Mercury', began: 2015, end: null },
    { company: 'UOL', began: 2010, end: 2015 },
  ],
};
*/

let students = [
  { name: 'Dmitry', score: 3, location: { country: 'pl', address: 'qwe' } },
  { name: 'Elen', score: 4, location: { country: 'pl', address: 'qwe' } },
  { name: 'Vasja', score: 2, location: { country: 'ua', address: 'qwe' } },
  { name: 'Petja', score: 5, location: { country: 'ua', address: 'qwe' } },
  { name: 'Plushka', score: 5, location: { country: 'pl', address: 'qwe' } },
];

/*
let sum = 0;

for (let index = 0; index < students.length; index++) {
  sum = sum + students[index].score;
}

let average = sum / students.length;
console.log(average);
*/

/*
let sum = 0;
students.forEach(function (student) {
  sum = sum + student.score;
});
let average = sum / students.length;
console.log(average);
*/

/*
let sum = students.reduce(function (sum, student) {
  return sum + student.score;
}, 0);
let average = sum / students.length;
console.log(average);
*/

/*
let sum = 0;
let counter = 0;
for (let index = 0; index < students.length; index++) {
  if (students[index].location.country == 'pl') {
    sum = sum + students[index].score;
    counter++;
  }
}
let average = sum / counter;
console.log(average);
*/

/*
let studentsInPoland = students.filter(function (student) {
  return student.location.country == 'pl';
});
let sum = studentsInPoland.reduce(function (sum, student) {
  return sum + student.score;
}, 0);
let average = sum / studentsInPoland.length;
console.log(average);
*/

/*
students.forEach(function (student) {
  student.inPoland = function () {
    return student.location.country == 'pl';
  };
});

let studentsInPoland = students.filter(function (student) {
  return student.inPoland();
});
let sum = studentsInPoland.reduce(function (sum, student) {
  return sum + student.score;
}, 0);
let average = sum / studentsInPoland.length;
console.log(average);
*/

let scores = students.map(function (student) {
  return student.score;
});
console.log(scores);
