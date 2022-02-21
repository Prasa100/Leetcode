/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = word => word === word.toUpperCase() || word.substring(1).toLowerCase() === word.substring(1);

