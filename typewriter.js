const sentence = "hello there from lighthouse labs";
let delay = 0;

const typewriter = (sent) => {
  sent += "\n";
  for (const char of sent) {
    delay += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
  }

};

typewriter(sentence);
