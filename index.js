const R = require('ramda');

function generateId() {
  const id1 = Math.round(Math.random() * 1000000000);
  const id2 = Math.round(Math.random() * 1000000000);
  return Number(R.join('', [id1, id2]));
}

exports.generateId = generateId;
