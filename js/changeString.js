const changeLetter = require('./changeLetter');
const addDivider = require('./addDivider')

module.exports = function changeString(str) {
  str = str.toUpperCase();
  str = str.replace(/[^A-FА-С0-9]/g, '');
  str = str.replace(/[А-Я]/g, changeLetter);
  str = addDivider(str);
  if(str.length >= 17) {str = str.slice(0,17);}
  return str;
}
