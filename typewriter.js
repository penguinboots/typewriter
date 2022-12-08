const sentence = "hello there from lighthouse labs";

const typewriter = (sent) => {
  let delay = 0;
  sent += "\n";
  for (const char of sent) {
    delay += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
  }

};

typewriter(sentence);
