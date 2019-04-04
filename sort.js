var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
students.sort(function(a,b){
  return b.age - b.age;
});
students.sort(function(a,b){
  //var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  //var nameB = b.name.toUpperCase();

  if(a.name< b.name){
    return -1;
  }
  if(a.name > b.name){
    return 1;
  }
  if(a.name === b.name){
  return b.age - a.age;
}
});
console.log("------- sorted Items-------");
console.log(students.sort());