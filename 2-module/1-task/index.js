/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

let pr = {
  John: 1000,
  currency: 'USD',
  Pete: 1300,
}


function sumSalary(i) {
  let sum = 0;
  for (let key in i) {
    if (typeof i[key] === "number"){
      sum += i[key];
    }
  }
  return sum
}



