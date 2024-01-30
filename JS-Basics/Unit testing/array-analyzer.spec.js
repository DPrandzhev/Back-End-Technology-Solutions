import { analyzeArray } from './array-analyzer.js';
import { expect } from 'chai'


describe('Array Analyzer', () => {
    it('should return undefined if input is not an array and/or array is empty)', () => {

    // Act + Assert
    const inputString = analyzeArray('hello')
    const inputInteger = analyzeArray(12345)
    const inputObject = analyzeArray({})
    const inputArray = analyzeArray([])
    const inputNull = analyzeArray(null)
    

    // Assert

    expect(inputString).to.be.undefined;
    expect(inputInteger).to.be.undefined;
    expect(inputObject).to.be.undefined;
    expect(inputArray).to.be.undefined;
    expect(inputNull).to.be.undefined;

        
    })

    it('should return result if the input is an array of positive numbers', () => {

        // Arrange
        const inputArray = [1, 2, 3, 4 , 5]

        // Act
        const result = analyzeArray(inputArray)

        // Assert
        expect(result).to.deep.equal({ min: 1, max: 5, length: 5 })
    })

    it('should return result if the input is an array of mixed numbers', () => {

        // Arrange
        const inputArray = [1, -2, 3, 4 , -5]

        // Act
        const result = analyzeArray(inputArray)

        // Assert
        expect(result).to.deep.equal({ min: -5, max: 4, length: 5 })
    })
        

    it('should return result if the input is an array of same numbers', () => {

        // Arrange
        const inputArray = [1, 1, 1, 1, 1]

        // Act
        const result = analyzeArray(inputArray)

        // Assert
        expect(result).to.deep.equal({ min: 1, max: 1, length: 5 })
    })
        

    it('should return result if the input is an array of a single number', () => {

        // Arrange
        const inputArray = [1]

        // Act
        const result = analyzeArray(inputArray)

        // Assert
        expect(result).to.deep.equal({ min: 1, max: 1, length: 1 })
        
    })

})
