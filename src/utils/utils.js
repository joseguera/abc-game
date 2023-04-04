export function isPrimeNumber(n) {
  for (var i = 2; i < n; i++) {
    // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
    if (n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
  }
  return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
}

// console.log(isPrimeNumber(27));

// Returns the prime factors of a composite number
export function primeFactorization(compositeNumber) {
  let factors = [];
  let remainder = compositeNumber;
  for (let i = 2; i < compositeNumber; i++) {
    if (compositeNumber % 2 === 0) {
      factors.push(2);
      compositeNumber = compositeNumber / 2;
    } else if (compositeNumber % 3 === 0) {
      factors.push(3);
      compositeNumber = compositeNumber / 3;
    } else if (compositeNumber > 5 && compositeNumber % 5 === 0) {
      factors.push(5);
      compositeNumber = compositeNumber / 5;
    }
  }
  remainder = compositeNumber !== 1 ? compositeNumber : 0;
  factors.push(remainder);

  return factors;
}

const number = primeFactorization(27);
// console.log(number)

// Returns all the factors that make up a composite number
// Takes an array of prime factors

export function factorFinder(primeFactors) {
  let factors = [1];
  let total = primeFactors[0];
  let rest = 1;
  factors.push(total);
  if (primeFactors.length < 2) {
    for (let i = 1; i < primeFactors.length; i++) {
      total *= primeFactors[i];
      factors.push(total);
    }
  } else {
    for (let i = 1; i < primeFactors.length; i++) {
      total *= primeFactors[i];
      factors.push(total);
    }
    for (let i = primeFactors.length - 1; i > 0; i--) {
      rest *= primeFactors[i];
      factors.push(rest);
    }
  }

  factors.sort(function (a, b) {
    return a - b;
  });

  // Making sure there are no strings, else convert to numbers
  let stringToInt = [];
  for (let i = 0; i < factors.length; i++) {
    if (typeof factors[i] === "string") {
      stringToInt.push(parseInt(factors[i]));
    } else {
      stringToInt.push(factors[i]);
    }
  }

  factors = stringToInt;

  return factors;
}

export function removeDuplicates(factors) {
  return factors
    .filter((item, index) => factors.indexOf(item) === index)
    .filter((item) => item !== 0);
}

// console.log(removeDuplicates(factorFinder(number)))
