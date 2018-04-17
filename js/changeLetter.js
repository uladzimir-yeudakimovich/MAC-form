module.exports = function changeLetter(str) {
  let obj = {'А' : 'A', 'В' : 'B', 'С' : 'C', 'Е' : 'E'}
  return obj[str] ? obj[str] : '';
}
