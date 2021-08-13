module.exports = function reverse (n) {
  const modulus = Math.abs(n);
  return Number(String(modulus).split('').reverse().join(''));
}
