// vigenere.js
function vigenereDecode(text, key) {
  if (!key || !/^[A-Za-z]+$/.test(key)) {
    return "Key must contain only letters.";
  }

  key = key.toLowerCase();
  let result = "";
  let keyIndex = 0;

  for (let char of text) {
    if (/[A-Za-z]/.test(char)) {
      const shift = key[keyIndex % key.length].charCodeAt(0) - 97;
      const base = char === char.toUpperCase() ? 65 : 97;

      result += String.fromCharCode(
        (char.charCodeAt(0) - base - shift + 26) % 26 + base
      );

      keyIndex++;
    } else {
      result += char;
    }
  }

  return result;
}
