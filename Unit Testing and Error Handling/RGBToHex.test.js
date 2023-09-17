const expect = require('chai').expect;
const rgbToHexColor = require('./RGBToHex')

describe('RBG to Hex', () => {
    it('Should return undefined when red, green and blue are under the limit', () => {
        expect(rgbToHexColor(-1, -2, -3)).to.be.undefined;
    });

    it('Should return undefined when red, green and blue are over the limit', () => {
        expect(rgbToHexColor(290, 300, 700)).to.be.undefined;
    });

    it('Should return undefined when one color is provided', () => {
        expect(rgbToHexColor(190)).to.be.undefined;
    });

    it('Should return undefined when two colors are provided', () => {
        expect(rgbToHexColor(190, 200,)).to.be.undefined;
    });

    it('Should return undefined when invalid types are provided', () => {
        expect(rgbToHexColor('', '', '')).to.be.undefined;
        expect(rgbToHexColor({}, {}, {})).to.be.undefined;
        expect(rgbToHexColor([], [], [])).to.be.undefined;
        expect(rgbToHexColor(null, undefined, false)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
        expect(rgbToHexColor(1.2, 4.34, 4.5)).to.be.undefined;
        expect(rgbToHexColor(() => 1, () => 13, () => 15)).to.be.undefined;
    });

    it('Should return undefined when rgbToHexColor(23)', () => {
        expect(rgbToHexColor(23)).to.be.undefined;
    });

    it('Should return color in hexadecimal format as a string when rgbToHexColor(1, 2, 3)', () => {
        expect(rgbToHexColor(1, 2, 3)).to.equal('#010203');
    });

    it('Should return color in hexadecimal format as a string when rgbToHexColor(0, 0, 0)', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('Should return color in hexadecimal format as a string when rgbToHexColor(255, 255, 255)', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
});