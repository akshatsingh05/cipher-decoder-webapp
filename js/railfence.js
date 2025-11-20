// railfence.js
// Rail Fence Cipher Decoder

function railFenceDecode(cipher, rails) {
  if (rails < 2) return "Rails must be >= 2.";

  const len = cipher.length;
  const fence = Array.from({ length: rails }, () => Array(len).fill(null));

  let row = 0;
  let dir = 1;

  // Mark zigzag pattern
  for (let i = 0; i < len; i++) {
    fence[row][i] = '*';
    row += dir;
    if (row === 0 || row === rails - 1) dir *= -1;
  }

  // Fill cipher text
  let index = 0;
  for (let r = 0; r < rails; r++) {
    for (let c = 0; c < len; c++) {
      if (fence[r][c] === '*' && index < len) {
        fence[r][c] = cipher[index++];
      }
    }
  }

  // Read zigzag
  let result = "";
  row = 0;
  dir = 1;
  for (let i = 0; i < len; i++) {
    result += fence[row][i];
    row += dir;
    if (row === 0 || row === rails - 1) dir *= -1;
  }

  return result;
}