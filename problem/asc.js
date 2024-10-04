arr = [23, 33, 200, 785];
uni = "";
dup = "";
for (i of arr) {
  x = String(i).split("").map(Number);
  emp = [];
  for (g of x) {
    if (!emp.includes(g)) {
      emp.push(g);
    }
  }
  console.log(emp);
  for (i of emp) {
    c = 0;
    for (j of x) {
      if (i == j) {
        c++;
      }
    }
    if (c == 1) {
      uni += i;
    } else {
      dup += i;
    }
  }
}
console.log("1) WAP to print duplicate from given number and concat the value");
console.log(dup);

arr = [538, 111, 200, 652];
res = [];
for (i of arr) {
  istr = String(i);
  c = 0;
  for (j = 0; j < istr.length - 1; j++) {
    if (istr[j + 1] < istr[j]) {
      c++;
    }
  }
  res.push(istr.length - 1 == c);
}
console.log(res);

arr = [8, 2, 4, 1, 2, 1, 5];
uni = "";
dup = "";
const duplicates = arr.filter((item, index) => arr.indexOf(item) == index);
for (i of duplicates) {
  c = 0;
  for (j of arr) {
    if (i == j) {
      c++;
    }
  }
  if (c == 1) {
    uni += i + " ";
  } else {
    dup += i + " ";
  }
}
console.log(uni);

function findFirstMissingFibonacci(arr) {
  function generateFibonacci(limit) {
    let a = 0,
      b = 1;
    const fibNumbers = [a, b];

    while (true) {
      let nextFib = a + b;
      if (nextFib > limit) break;
      fibNumbers.push(nextFib);
      a = b;
      b = nextFib;
    }

    return fibNumbers;
  }

  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) maxNum = arr[i];
  }
  console.log(maxNum);
  const fibNumbers = generateFibonacci(maxNum + 1);
  console.log(fibNumbers);

  for (let i = 0; i < fibNumbers.length; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === fibNumbers[i]) {
        found = true;
        break;
      }
    }
    if (!found) return fibNumbers[i];
  }

  return null;
}
const sequence = [10, 1, 0, 5, 7]; // Example array
const missingFib = findFirstMissingFibonacci(sequence);

console.log("First missing Fibonacci number is:", missingFib);
