var words = ["ground", "control", "to", "major", "tom"];
var map = Array.prototype.map// how to use map on this function
var a= words.map.call(words, function(word) {

  return word.length;
});

var b = words.map.call(words, function(word) {
return word.toUpperCase();
 });

var c = words.map.call(words, function(word) {
return word.split('').reverse().join('');
 });
console.log(a);
console.log(b);
console.log(c);



// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
