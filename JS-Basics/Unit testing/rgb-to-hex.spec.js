import {rgbToHexColor} from './rgb-to-hex.js'
import {expect} from 'chai'





describe('RGB to Hex color', () => {
    it('should return undefined if Red value is invalid', () => {

        // Arrange


        // Act
        const negativeRed = rgbToHexColor(-5, 5, 5)
        const positiveRed = rgbToHexColor(256, 5, 5)
        const nonNumericRed = rgbToHexColor( 'a', 5, 5 )

        // Assert
        expect(negativeRed).to.be.undefined
        expect(positiveRed).to.be.undefined
        expect(nonNumericRed).to.be.undefined
        
    })

    it('should return undefined if Green value is invalid', () => {

        // Arrange
        const negativeGreen = rgbToHexColor(5, -5, 5)
        const positiveGreen = rgbToHexColor(5, 355, 5)
        const nonNumericGreen = rgbToHexColor( 5 , '5', 5 )

        // Assert
        expect(negativeGreen).to.be.undefined
        expect(positiveGreen).to.be.undefined
        expect(nonNumericGreen).to.be.undefined

    })

    it('should return undefined if Blue value is invalid', () => {

        // Arrange
        const negativeBlue = rgbToHexColor(-5, 5, -5)
        const positiveBlue = rgbToHexColor(5, 5, 533)
        const nonNumericBlue = rgbToHexColor( 5, 5, '5' )

        // Assert
        expect(negativeBlue).to.be.undefined
        expect(positiveBlue).to.be.undefined
        expect(nonNumericBlue).to.be.undefined
    })

    it('should return correct Hex value if correct RGB values are given', () => {
        
        // Arrange
        const red = 155
        const green = 155
        const blue = 155

        // Act
        const result = rgbToHexColor(red, green, blue)

        // Assert
        expect(result).to.equal('#9B9B9B');
        
    })

    it('should return correct Hex value if max values are given', () => {
        
        // Arrange
        const red = 255
        const green = 255
        const blue = 255

        // Act
        const result = rgbToHexColor(red, green, blue)

        // Assert
        expect(result).to.equal('#FFFFFF');
    })

    it('should return correct Hex value if min values are given', () => {
        
        // Arrange
        const red = 0
        const green = 0
        const blue = 0

        // Act
        const result = rgbToHexColor(red, green, blue)

        // Assert
        expect(result).to.equal('#000000');
    })


})