// 1) Write a function that prints the numbers from 1 to 100. But for multiples of three print “Foo” instead of the number and for the multiples of five print “Bar”. For numbers which are multiples of both three and five print “FooBar”.
// Example output: 1 2 Foo 4 Bar Foo 7 8 Foo Bar 11 Foo 13 14 FooBar …

function one() {
  for (var i = 0; i <=100; i ++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("FooBar");
    } else if (i % 3 === 0) {
      console.log("Foo");
    } else if (i % 5 === 0) {
      console.log("Bar")
    } else {
      console.log(i);
    }
  }
}

one();
