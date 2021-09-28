// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    if(typeof input != "string") return false;

    if(!encode){
      if(input.match(/\d{1}/g).length%2) return false;
      return input.match(/\d{2}|\D/g).map(code => {
        if(!(code*1)) return code;
        if(code === "42") return "(i/j)";
        return code[1] <= 2 && code != "52" ? String.fromCharCode((code[1]-1)*5 + code[0]*1 + 96) : String.fromCharCode((code[1]-1)*5 + code[0]*1 + 97);
      }).join('')
    }

    if(input.match(/\d{2,}/g)) return false;
    return input.toLowerCase().split('').map(ch => {
      if(ch.match(/\d|\s|\W/g)) return ch;
      chCode = ch.charCodeAt(0)
      if(chCode >= 97 && chCode <= 122){
        return chCode >= 106 ? String((chCode - 98) % 5 + 1) + String(Math.floor((chCode - 98) / 5 + 1)) : String((chCode - 97) % 5 + 1) + String(Math.floor((chCode - 97) / 5 + 1));
      }
    }).join('');
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
