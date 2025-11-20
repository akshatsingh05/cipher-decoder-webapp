// substitution.js
// Substitution Cipher Decoder

function substitutionDecode(text, key) {
  key = key.toUpperCase();

  if (key.length !== 26 || !/^[A-Z]+$/.test(key)) {
    return "Invalid key. Key must be exactly 26 letters (A–Z).";
  }

  const map = {};
  for (let i = 0; i < 26; i++) {
    map[key[i]] = String.fromCharCode(65 + i);
  }

  let result = "";
  for (let char of text) {
    const upper = char.toUpperCase();
    if (upper >= 'A' && upper <= 'Z') {
      const decoded = map[upper];
      result += char === char.toUpperCase() ? decoded : decoded.toLowerCase();
    } else {
      result += char;
    }
  }
  return result;
}