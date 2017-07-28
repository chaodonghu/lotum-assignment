// 2) Write a function that determines the number of even numbers that appear in a range of integers 0..n, where n is supplied as the sole argument to your function.
//
// Example:
//
// even_integers(3)
//
// 2

let count = 0;
function even_integers(n) {
  for (var i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  console.log(count);
}

even_integers(3);
