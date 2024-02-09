function backspace(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    char === "<" ? result?.pop() : result.push(char);
  }

  return result.join("");
}

console.log(backspace("a<bc<")); // b
console.log(backspace("foss<<rritun")); // forritun
console.log(backspace("a<a<aa<<")); //
console.log(backspace("a<bc<<")); // 
