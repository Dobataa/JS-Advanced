const expect = require('chai').expect;
const isSymmetric = require('./checkForSymmetry');

describe('Check for Symmetry', () => {
    describe('Regular cases', () => {

        it('Should return true on isSymmetric([1, 2, 1])', () => {
            expect(isSymmetric([1, 2, 1])).to.be.true;
        });

        it('Should return false on isSymmetric([1, 2, -1])', () => {
            expect(isSymmetric([1, 2, -1])).to.be.false;
        });

        it('Should return true on isSymmetric([1, 2, 2, 1])', () => {
            expect(isSymmetric([1, 2, 2, 1])).to.be.true;
        });

        it('Should return false on isSymmetric([1, 2, 2, -1])', () => {
            expect(isSymmetric([1, 2, 2, -1])).to.be.false;
        });

        it('Should return true on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
            expect(isSymmetric(["pesho", new Date(2016, 8, 15), false, new Date(2016, 8, 15), "pesho"])).to.be.true;
        });

        it('Should return false on isSymmetric(["pesho",new Date(2016,8,15),false, "pesho"])', () => {
            expect(isSymmetric(["pesho", new Date(2016, 8, 15), false, "pesho"])).to.be.false;
        });
    });

    describe('Edge cases', () => {
        // number and string representation of the same number
        it('should return false on isSymmetric(["2",2])', () => {
            expect(isSymmetric(["2", 2])).to.be.false;
        });

        // 1 item
        it('should return true on isSymmetric([2])', () => {
            expect(isSymmetric([2])).to.be.true;
        });

        // []
        it('should return true on isSymmetric([])', () => {
            expect(isSymmetric([])).to.be.true;
        });

        // string instead []
        it('should return false on isSymmetric("hello")', () => {
            expect(isSymmetric("hello")).to.be.false;
        });

        // [[], [], []]
        it('should return true on isSymmetric([[1,2], [2], [1,2]])', () => {
            expect(isSymmetric([[1, 2], [2], [1, 2]])).to.be.true;
        });
    });
});