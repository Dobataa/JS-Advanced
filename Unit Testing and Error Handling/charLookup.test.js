const expect = require('chai').expect;
const lookupChar = require('./charLookup');

describe('Char Lookup', () => {
    it('should return e when lookupChar("three", 3)', () => {
        expect(lookupChar("three", 3)).to.equal('e');
    });
    
    it('should return " " when lookupChar("I want milk", 6)', () => {
        expect(lookupChar("I want milk", 6)).to.equal(' ');
    });

    it('should return undefined when when the first param is wrong', () => {
        expect(lookupChar(6, 6)).to.be.undefined;
        expect(lookupChar(null, 6)).to.be.undefined;
        expect(lookupChar(undefined, 6)).to.be.undefined;
        expect(lookupChar(false, 6)).to.be.undefined;
        expect(lookupChar({}, 6)).to.be.undefined;
        expect(lookupChar([], 6)).to.be.undefined;
    });

    it('should return undefined when the second param is wrong', () => {
        expect(lookupChar("three", "3")).to.be.undefined;
        expect(lookupChar("three", 3.5)).to.be.undefined;
        expect(lookupChar("three", null)).to.be.undefined;
        expect(lookupChar("three", undefined)).to.be.undefined;
        expect(lookupChar("three", false)).to.be.undefined;
        expect(lookupChar("three", {})).to.be.undefined;
        expect(lookupChar("three", [])).to.be.undefined;
    });

    it('should return "Incorrect index" when the second param is off limit', () => {
        expect(lookupChar("three", -1)).to.equal("Incorrect index");
        expect(lookupChar("three", 5)).to.equal("Incorrect index");
        expect(lookupChar("three", 55)).to.equal("Incorrect index");
    });
});