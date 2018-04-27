/* jshint esversion: 6 */

const {
  concat,
  join,
  map,
  multiply,
  length,
  nth,
  compose
} = require('ramda');
const crypto = require('crypto');


// generateId :: a -> string
function generateId() {
  // concat string with hash for use in the DOM
  return concat(
    'BS',
    crypto.randomBytes(10).toString('hex').toUpperCase()
  );
}

// generateName :: [array] -> string
function generateName(listsToCompose) {
  // randomPositionInList :: array -> int
  function randomPositionInList(list) {
    return Math.trunc(multiply(Math.random(), length(list)));
  }

  return compose(
    join(' '),
    map(cur => nth(randomPositionInList(cur), cur))
  )(listsToCompose);
}


exports.generateId = generateId;
exports.generateName = generateName;
