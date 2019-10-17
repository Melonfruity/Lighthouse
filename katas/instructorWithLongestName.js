const instructorWithLongestName = function(instructors) {
  return instructors.reduce((iLObject, iObject) => {
    return iLObject.name.length > iObject.name.length ? iLObject : iObject;  
  }, instructors[0])
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));