// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    if(shift === 0 || shift < -25 || shift > 25 || typeof input != "string" || !Number.isInteger(shift)) return false;
    shift = !encode ? (shift < 0 ? shift * -1 : shift * -1 + 26) : (shift < 0 ? shift + 26 : shift) 
    return input.toLowerCase().split('').map(ch => ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122 ? String.fromCharCode((ch.charCodeAt(0) - 97 + shift) % 26 + 97): ch).join('')
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
