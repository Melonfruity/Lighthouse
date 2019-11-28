const array = [10, 2, 5, 1, 9];
console.log(array.sort((a,b) => a - b));

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
console.log(students.sort((a,b) => a.name > b.name));
console.log(students.sort((a,b) => a.age > b.age));

