const expect = require("chai").expect;
const substitution = require("../src/substitution.js").substitution;

describe("substitution", () => {
    it("should return the encoded message according to the given alphabet. 🙌🙌🙌", () => {
        let expected = 'jrufscpw';
        let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.be.equal(expected);
    });

    it("should return the decoded message according to the given alphabet. 🙌🙌🙌", () => {
        let expected = 'thinkful';
        let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.be.equal(expected);

        expected = 'thinkful';
        actual = substitution("j.*fscpw", "xoyqmcg.*kswaflnthdjpzibev", false);
        expect(actual).to.be.equal(expected);
    });

    it("should return messages that only encode and decode letters. 🙌🙌🙌", () => {
        expected = "'jrufscpw' @123!";
        actual = substitution("'thinkful' @123!", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.be.equal(expected);
        
        expected = 'thinkful @123!';
        actual = substitution("jrufscpw @123!", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.be.equal(expected);
    });

    it("should ignore capital letters. 🙌🙌🙌", () => {
        expected = "'jrufscpw' @123!";
        actual = substitution("'THinkful' @123!", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.be.equal(expected);
        
        expected = 'thinkful @123!';
        actual = substitution("JRufscpw @123!", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.be.equal(expected);
    });

    it("should return false if the given alphabet has repeating charachters. 🙌🙌🙌", () => {
        actual = substitution("jrufscpw @123!", ["cxxxxxgrukswaflnthdjpzibev"], false);
        expect(actual).to.be.false;
        
        actual = substitution("jrufscpw @123!", ["xoyqmcvrukswaflnthdjpzibev"], false);
        expect(actual).to.be.false;
    });

    it("should return false if the message or alphabet type is not a string. 🙌🙌🙌🎉🎉🎉🎊🎈🎊🎈", () => {
        actual = substitution("jrufscpw @123!", ["xoyqmcgrukswaflnthdjpzibev"], false);
        expect(actual).to.be.false;

        actual = substitution({"message": "jrufscpw @123!"}, "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.be.false;
    });
})