// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
    if(typeof input != "string") return false;

    //Decode
    if(!encode){
      const invalidOddNumberOfDigits = input.match(/\d{2,}/g).every(code => !(code%2));
      if(invalidOddNumberOfDigits) return false;
      // matches every pair of digits or any non-digits
      return input.match(/\d{2}|\D/g).map(code => {
        const notDigit = !(code*1);
        if(notDigit) return code;
        if(code === "42") return "(i/j)";
        return code[1] <= 2 && code != "52" 
          ? String.fromCharCode((code[1]-1)*5 + code[0]*1 + 96) //if > 42
          : String.fromCharCode((code[1]-1)*5 + code[0]*1 + 97); //if < 42
      }).join('')
    }

    //Encode
    const thereIsAPairOfDigits = input.match(/\d{2,}/g);
    const numberBesideLetter = input.match(/\d[a-zA-Z]|[a-zA-Z]\d/g);
    if(thereIsAPairOfDigits || numberBesideLetter) return false;
    return input.toLowerCase().split('').map(ch => {
      const notAlphaCharachter = ch.match(/\d|\s|\W/g);
      if(notAlphaCharachter) return ch;
      chCode = ch.charCodeAt();
      return chCode >= 106 
        ? String((chCode - 98) % 5 + 1) + String(Math.floor((chCode - 98) / 5 + 1))
        : String((chCode - 97) % 5 + 1) + String(Math.floor((chCode - 97) / 5 + 1));
    }).join('');
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
