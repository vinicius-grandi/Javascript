function sqrt(number) {
  let root = number / 2;
  let last = 0;

  while (Math.abs(root - last) > 0) {
    last = root
    root = (root + (number / root)) / 2;
  }
  return root;
}

module.exports = sqrt;
