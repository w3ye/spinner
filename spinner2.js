const symbolArr = ['|', '/', '-', '\\', '|'];
let start = 100;
for (let i = 0; i < 2; i++) {
  for (let symbol of symbolArr) {
    setTimeout(() => {
      process.stdout.write(`\r${symbol}`);
    }, start);
    start += 200;
  }
}
