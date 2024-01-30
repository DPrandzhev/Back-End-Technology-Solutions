import { lookupChar } from './char-lookup.js'
import { expect } from 'chai';




describe('Char Lookup', () => {

    it('should return Incorrect index when index is not in the bounds, but string is correct', () => {

        // Arrange
        const inputString = "hello world"
        const inputIndex = -223

        // Act
        const result = lookupChar(inputString, inputIndex)


        // Assert
        expect(result).is.equal('Incorrect index')
    })

    it('should return Incorrect index when index is longer than the string', () => {

        // Arrange
        const inputString = "hello world"
        const inputIndex = 223

        // Act
        const result = lookupChar(inputString, inputIndex)


        // Assert
        expect(result).is.equal('Incorrect index')
        
    })

    it('should return correct char when inputIndex and inputString are correct', () => {

        // Arrange
        const inputString = "hello world"
        const inputIndex = 2

        // Act
        const result = lookupChar(inputString, inputIndex)


        // Assert
        expect(result).is.equal('l')
        
    })

    it('should return undefined if index is a floating number', () => {

        // Arrange
        const inputString = "hello world"
        const inputIndex = 2.3

        // Act
        const result = lookupChar(inputString, inputIndex)


        // Assert
        expect(result).to.be.undefined
        
    })

    it('should return undefined if the string is not a string', () => {

        // Arrange
        const inputString = 12345
        const inputIndex = -1

        // Act
        const result = lookupChar(inputString, inputIndex)


        // Assert
        expect(result).to.be.undefined
        
    })
    it('should return undefined if the index is not an integer', () => {

        // Arrange
        const inputString = "string to test"
        const inputIndex = '12345'

        // Act
        const result = lookupChar(inputString, inputIndex)


        // Assert
        expect(result).to.be.undefined
        
    })

})
