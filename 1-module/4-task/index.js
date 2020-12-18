/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    let param = str.toUpperCase()
    if(param.includes("XXX") || param.includes('1XBET') ){
      return true
    }else {
      return false
    }
  }


checkSpam('1xbEt')

