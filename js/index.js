const changeString = require('./changeString');
const formField = document.getElementById('macForm');

if (formField) {
  formField.addEventListener('keyup', keyPushed);
}

function keyPushed(e) {
  const target = e.target;
  target.value = changeString(target.value);
}
