const expect = require('chai').expect;
const mathEnforcer = require('./mathEnforcer');

describe('Math Enforcer', () => {
    describe('addFive function', () => {
        it('should return undefined if the parameter is not a number', () => {
            expect(mathEnforcer.addFive('three')).to.be.undefined;
            expect(mathEnforcer.addFive(false)).to.be.undefined;
            expect(mathEnforcer.addFive(null)).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive(' ')).to.be.undefined;
        });

        it('should add five if the input is a number', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        });
    });

    describe('subtractTen function', () => {
        it('should return undefined if the parameter is not a number', () => {
            expect(mathEnforcer.subtractTen('three')).to.be.undefined;
            expect(mathEnforcer.subtractTen(false)).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(' ')).to.be.undefined;
        });

        it('should subtract ten if the input is a number', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
        });
    });

    describe('sum function', () => {
        it('should return undefined if the first parameter is not a number', () => {
            expect(mathEnforcer.sum('three', 5)).to.be.undefined;
            expect(mathEnforcer.sum([], 5)).to.be.undefined;
            expect(mathEnforcer.sum({}, 5)).to.be.undefined;
            expect(mathEnforcer.sum(null, 5)).to.be.undefined;
            expect(mathEnforcer.sum(undefined, 5)).to.be.undefined;
            expect(mathEnforcer.sum(false, 5)).to.be.undefined;
        });

        it('should return undefined if the second parameter is not a number', () => {
            expect(mathEnforcer.sum(5, 'three')).to.be.undefined;
            expect(mathEnforcer.sum(5, [])).to.be.undefined;
            expect(mathEnforcer.sum(5, {})).to.be.undefined;
            expect(mathEnforcer.sum(5, null)).to.be.undefined;
            expect(mathEnforcer.sum(5, undefined)).to.be.undefined;
            expect(mathEnforcer.sum(5, false)).to.be.undefined;
        });

        it('should return the sum if the two parameters are numbers', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
            expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
            expect(mathEnforcer.sum(5, -5)).to.equal(0);
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
            expect(mathEnforcer.sum(3.14, 5.34)).to.equal(8.48);
        });
    });
});