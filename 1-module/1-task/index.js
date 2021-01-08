/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let count = 1;

  while (n > 1){
    count = count * n;
      n --;
    }

    return count
  }

