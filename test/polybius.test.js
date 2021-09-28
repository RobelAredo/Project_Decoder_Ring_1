const expect = require("chai").expect;
const polybius = require("../src/polybius.js").polybius;

describe("polybius", () => {
    it("should return an encoded message according to the polybius cipher as a string while maintaining spaces.", () => {
        let expected = "4432423352125413"
        let actual = polybius("Thinkful")
        expect(actual).to.be.equal(expected);

        expected = "4432423352125413  4432423352125413"
        actual = polybius("Thinkful  Thinkful")
        expect(actual).to.be.equal(expected);
    })

    it("should return a decoded message according to the polybius cipher as a string while maintaining spaces.", () => {
        let expected = "th(i/j)nkful"
        let actual = polybius("4432423352125413", false)
        expect(actual).to.be.equal(expected);

        expected = "(i/j) th(i/j)nk full"
        actual = polybius("42 4432423352 12541313", false)
        expect(actual).to.be.equal(expected);
    })

    it("should return messages that only encode and decode letters.", () => {
        let expected = "'th(i/j)nkful @!'"
        let actual = polybius("'4432423352125413 @!'", false)
        expect(actual).to.be.equal(expected);

        expected = "'4432423352125413@ 1!'"
        actual = polybius("'thinkful@ 1!'")
        expect(actual).to.be.equal(expected);
    })

    it("should ignore capital letters.", () => {
        expected = "'4432423352125413@ 1!'"
        actual = polybius("'THINKful@ 1!'")
        expect(actual).to.be.equal(expected);
    })

    it("should return false if the encoded message has a odd number of digits.", () => {
        actual = polybius("44324233521254131", false);
        expect(actual).to.be.false;
    });

    it("should return false if the message has consecutive numbers.", () => {
        actual = polybius("Thinkful123");
        expect(actual).to.be.false;
    });

    it("should return false if the message type is not a string.", () => {
        actual = polybius(["Thinkful123"]);
        expect(actual).to.be.false;
    })
})