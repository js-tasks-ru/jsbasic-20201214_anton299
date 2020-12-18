/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let i = 1;
    while (n > 1){
      i = i * n;
      n --;
    }
    return i
  }



factorial(5)
