const expect = require('chai').expect;
const isOddOrEven = require('./evenOrOdd');

describe('Even Or Odd', () => {
    it('should return undefined when the input is not a string', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven(false)).to.be.undefined;
        expect(isOddOrEven(undefined)).to.be.undefined;
        expect(isOddOrEven(null)).to.be.undefined;
        expect(isOddOrEven(() => 1)).to.be.undefined;
    });

    it('should return even when the input is four', () => {
        expect(isOddOrEven('four')).to.equal('even');
    })

    it('should return odd when the input is three', () => {
        expect(isOddOrEven('three')).to.equal('odd');
    })

    it('should return even when the input is an empty string', () => {
        expect(isOddOrEven('')).to.equal('even');
    })
});