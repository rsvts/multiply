const bigInt = require('big-integer');
module.exports = function multiply(first, second) {

    return bigInt(first).multiply(second).toString();

}