export function ship(length) {
  let hitCount = 0;
  let sunk = false;

  function hit() {
    if (!sunk) {
      hitCount++;
      if (hitCount >= length) {
        sunk = true;
      }
    }
  }
  function isSunk() {
    return sunk;
  }
  return {
    length,
    hitCount,
    sunk,
    hit,
    isSunk,
  };
}
