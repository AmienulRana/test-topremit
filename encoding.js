function encode(input) {
  let encoded = "";
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      encoded += input[i] + count;
      count = 1;
    }
  }
  return encoded;
}
function decode(input) {
  let decoded = "";
  for (let i = 0; i < input.length; i += 2) {
    let char = input[i];
    let count = parseInt(input[i + 1]);
    decoded += char.repeat(count);
  }

  // expected input : HHeeLLoo
  if(!decoded) alert(`${input} adalah karakter yang sudah di decode`);


  return decoded;
}

function runLengthEncoding(value) {
  let splitTheString = value?.split(" ");
  return splitTheString[0] === "E"
    ? encode(splitTheString[1])
    : decode(splitTheString[1]);
}



console.log(runLengthEncoding("E HeeeLLoo"));
console.log(runLengthEncoding("D H2e3l2o2"));
