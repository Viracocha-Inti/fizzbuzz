let answer = parseInt(
  prompt("Please enter the number you would like to Fizzbuzz up to: 50")
);
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
