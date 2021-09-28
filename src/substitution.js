// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //console.log((/(\w)(?=.*?\1)/).test(alphabet))
    if(typeof input != "string" || typeof alphabet != "string" || alphabet.length !== 26 || (/(\w)(?=.*?\1)/).test(alphabet)) return false;

    if(!encode) {
      return input.toLowerCase().split('').map(ch => {
        if(!alphabet.includes(ch)) return ch;
        chCode = alphabet.indexOf(ch);
        return String.fromCharCode(chCode + 97);
        }).join('');
    }
    
    return input.toLowerCase().split('').map(ch => {
      if(ch.match(/\d|\s|\W/g)) return ch;
      chCode = ch.charCodeAt(0) - 97;
      return alphabet[chCode];
    }).join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
