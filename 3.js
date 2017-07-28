// 3) Given the following pseudo code, determine the range of possible values for “a”.
// x = random_int(1,6)
//
// y = random_int(1,6)
//
// z = random_int(1,6)
//
// a = x + y + z

let startingInteger = 1;
let endingInteger = 6;
let x = [];
let y = [];
let z = [];

for (var i = startingInteger; i<=endingInteger; i++) {
  x.push(i);
  y.push(i);
  z.push(i);
}

let set = [...x,...y,...z];

var combos = [];
x.forEach(set1 => {
  y.forEach(set2 => {
    z.forEach(set3 => {
    combos.push(set1 + set2 + set3);
    });
  });
});

// Helper function to sort numbers
function sortNumber(a,b) {
  return a - b;
}

// Sort the combos in ascending order
combos = combos.sort(sortNumber);

// Can either remove duplicates by (1) creating a new set
// var newSet = [...new Set(combos)]

// or (2) Filtering the duplicates out and creating a new array of duplicates removed
var unique = combos.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})

unique = unique.sort(sortNumber);

// Print out the possible unique combinations of all 3 arrays
console.log(unique)
