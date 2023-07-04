//function animates each letter of a string
let time = 0;

const animation = (sentence) => {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 50;
  }
  //set another dalay for new line
  setTimeout(() => {
    process.stdout.write("\n");
  }, time);
};

animation("hello there from lighthouse labs");