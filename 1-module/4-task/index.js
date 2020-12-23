/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    const param = str.toUpperCase()
    return (param.includes("XXX") || param.includes('1XBET') )? true: false
}



