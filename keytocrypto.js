function decryptMessage(ciphertext, secretWord) {
  let decryptedMessage = "";
  let secretIndex = 0;

  for (let i = 0; i < ciphertext.length; i++) {
    let shiftValue = secretWord.charCodeAt(secretIndex) - "A".charCodeAt(0);

    shiftValue %= 26;

    let decryptedChar = String.fromCharCode(
      ((ciphertext.charCodeAt(i) - "A".charCodeAt(0) - shiftValue + 26) % 26) +
        "A".charCodeAt(0)
    );

    decryptedMessage += decryptedChar;

    if (secretIndex < secretWord.length) {
      secretIndex++;
    }
  }
  return decryptedMessage;
}

let ciphertext = "SGZVQBUQAFRWSLC";
let secretWord = "ACM";
console.log(decryptMessage(ciphertext, secretWord));
