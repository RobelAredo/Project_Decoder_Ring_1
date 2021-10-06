const expect = require("chai").expect;
const caesar = require("../src/caesar")["caesar"];

describe("caesar", () => {
    it("should return false if the given shift is 0, less than -25, greater than 25, or not present. 💪🤘✊", () => {
        let actual = caesar("", 0);
        expect(actual).to.be.false;

        actual = caesar("", 29);
        expect(actual).to.be.false;

        actual = caesar("", -32);
        expect(actual).to.be.false;

        actual = caesar("");
        expect(actual).to.be.false;
    })

    it("should return the proper encoded message for the given shift. 💪🤘✊", () => {
        let actual = caesar("encode", 5);
        let expected = "jshtij";
        expect(actual).to.equal(expected);

        actual = caesar("encode", -5);
        expected = "zixjyz";
        expect(actual).to.equal(expected);
    })

    it("should return the proper decoded message for the given shift. 💪🤘✊", () => {
        let actual = caesar("jshtij", 5, false);
        let expected = "encode";
        expect(actual).to.equal(expected);

        actual = caesar("zixjyz", -5, false);
        expected = "encode";
        expect(actual).to.equal(expected);        
    })

    it("should only encode and decode letters while maintaining other charachters. 💪🤘✊", () => {
        let actual = caesar("encode me just 1 time @ each letter!", 5);
        let expected = "jshtij rj ozxy 1 ynrj @ jfhm qjyyjw!";
        expect(actual).to.equal(expected);

        actual = caesar("yzxjyz hz epno 1 odhz @ zvxc gzoozm! 🔏🔏🔏", -5, false);
        expected = "decode me just 1 time @ each letter! 🔏🔏🔏";
        expect(actual).to.equal(expected);
    })

    it("should ignore capital letters. 💪🤘✊", () => {
        let actual = caesar("EnCode", 5);
        let expected = "jshtij";
        expect(actual).to.equal(expected);

        actual = caesar("JshTij", 5, false);
        expected = "encode";
        expect(actual).to.equal(expected);        
    })

    it("should return false if the message type is not a string. 💪🤘✊", () => {
        let actual = caesar(["Thinkful123"]);
        expect(actual).to.be.false;
    })

    it("should return false if the shift type is not a integer. 💪🤘✊", () => {
        let actual = caesar("", -5.5);
        expect(actual).to.be.false;

        actual = caesar("", "five");
        expect(actual).to.be.false;
    })
})