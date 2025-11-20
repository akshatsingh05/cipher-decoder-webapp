// caesar.js
// Brute-force Caesar Cipher Decoder

function caesarDecode(text) {
  let results = "";
  for (let shift = 0; shift < 26; shift++) {
    let decoded = "";
    for (let char of text) {
      if (char >= 'A' && char <= 'Z') {
        decoded += String.fromCharCode((char.charCodeAt(0) - 65 - shift + 26) % 26 + 65);
      } else if (char >= 'a' && char <= 'z') {
        decoded += String.fromCharCode((char.charCodeAt(0) - 97 - shift + 26) % 26 + 97);
      } else {
        decoded += char;
      }
    }
    results += `Shift ${shift}: ${decoded}\n`;
  }
  return results;
}