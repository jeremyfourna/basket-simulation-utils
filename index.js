const R = require('ramda');

// generateId :: a -> string
function generateId() {
  const idLength = 1000000000;
  const id1 = Math.round(Math.random() * idLength);
  const id2 = Math.round(Math.random() * idLength);

  return R.join('', [id1, id2]);
}

// generateName :: [array] -> string
function generateName(listsToCompose) {
  return R.join(' ', R.map(cur => {
    const randomPositionInList = Math.trunc(R.multiply(Math.random(), R.length(cur)));
    return R.nth(randomPositionInList, cur);
  }, listsToCompose));
}

exports.generateId = generateId;
exports.generateName = generateName;
