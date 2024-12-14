let a = 0,
  b = 1,
  c;

for (let i = 2; i <= 20; i++) {
  c = a + b;
  a = b;
  b = c;
}

console.log(c);
