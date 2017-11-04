const R = require('ramda');

function generateId() {
  const id1 = Math.round(Math.random() * 1000000000);
  const id2 = Math.round(Math.random() * 1000000000);
  return Number(R.join('', [id1, id2]));
}

function generateName(listsToCompose) {
  return R.join(' ', R.map(cur => {
    return R.nth(Math.trunc(R.multiply(Math.random(), R.length(cur))), cur);
  }, listsToCompose));
}

exports.generateId = generateId;
exports.generateName = generateName;
