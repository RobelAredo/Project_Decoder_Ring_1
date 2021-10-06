// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  const shiftCharachter = (shift, ch) => {
    return String.fromCharCode((ch.charCodeAt(0) - 97 + shift) % 26 + 97)
  }

  function caesar(input, shift = 0, encode = true) {
    const invalidShift = shift === 0 || shift < -25 || shift > 25 || !Number.isInteger(shift);
    if(invalidShift || typeof input != "string") return false;
    if(!encode) shift *= -1;
    if(shift < 0) shift += 26;

    const message = input.toLowerCase().split('');
    return message.map(ch => 
      ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122 //if a-z
        ? shiftCharachter(shift, ch)
        : ch
    ).join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
