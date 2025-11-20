// main.js
// Connects UI with cipher functions + global fallback

function handleDecode() {
  const text = document.getElementById("inputText").value;
  const cipher = document.getElementById("cipherSelect").value;
  const keyInput = document.getElementById("keyInput").value;
  const output = document.getElementById("output");

  let result = "";

  if (cipher === "caesar") {
    result = caesarDecode(text);
  }

  else if (cipher === "substitution") {
    result = substitutionDecode(text, keyInput);
  }

  else if (cipher === "railfence") {
    const rails = parseInt(keyInput);
    if (isNaN(rails) || rails < 2) {
      result = "Please enter a valid number of rails (>=2).";
    } else {
      result = railFenceDecode(text, rails);
    }
  }

  else if (cipher === "vigenere") {
    // defensive check: ensure function exists
    if (typeof vigenereDecode !== 'function') {
      result = 'vigenereDecode() not found. Make sure js/vigenere.js is loaded before main.js and contains function vigenereDecode.';
    } else {
      result = vigenereDecode(text, keyInput);
    }
  }

  output.textContent = result;
}

// Update key input visibility based on cipher selection

document.addEventListener("DOMContentLoaded", () => {
  const cipherSelect = document.getElementById("cipherSelect");
  const keyBox = document.getElementById("keyBox");
  const keyLabel = document.getElementById("keyLabel");

  function updateKeyUI() {
    const cipher = cipherSelect.value;

    if (cipher === "caesar") {
      keyBox.style.display = "none";
    }
    else if (cipher === "substitution") {
      keyLabel.textContent = "Enter 26-letter substitution key:";
      keyBox.style.display = "block";
    }
    else if (cipher === "railfence") {
      keyLabel.textContent = "Enter number of rails:";
      keyBox.style.display = "block";
    }
    else if (cipher === "vigenere") {
      keyLabel.textContent = "Enter Vigenère key:";
      keyBox.style.display = "block";
    }
  }

  cipherSelect.addEventListener("change", updateKeyUI);
  updateKeyUI();
});