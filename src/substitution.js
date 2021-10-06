// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  function substitution(input, alphabet, encode = true) {
    if(typeof input != "string" || typeof alphabet != "string") return false;

    const repeatedSymbolInAlphabet = (/(\w)(?=.*?\1)/).test(alphabet)
    if(alphabet.length !== 26 || repeatedSymbolInAlphabet) return false;
  
    if(!encode) {
      return input.toLowerCase().split('').map(ch => {
        if(!alphabet.includes(ch)) return ch;
        chCode = alphabet.indexOf(ch);
        return String.fromCharCode(chCode + 97);
        }).join('');
    }
    
    return input.toLowerCase().split('').map(ch => {
      const notAlphaCharachter = ch.match(/\d|\s|\W/g);
      if(notAlphaCharachter) return ch;
      const chCode = ch.charCodeAt() - 97;
      return alphabet[chCode];
    }).join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
