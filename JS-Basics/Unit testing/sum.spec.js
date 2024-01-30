import { sum } from './sum.js'
import { assert } from 'chai';


describe('The function sum', () => {
    it('should return 0 if an empty array is given', () => {
        // Arrange
        const inputArr = [];

        // Act
        const result = sum(inputArr);

        // Assert
        assert.equal(result, 0);
    })

    it('should return the single element as a sum if a single element array is given', () => {
        // Arrange
        const inputArr = [10];

        // Act
        const result = sum(inputArr);

        // Assert
        assert.equal(result, 10);
    })

    it('should return the sum of array when given positive number array', () => {
        // Arrange
        const inputArr = [2, 3, 4, 5];

        // Act
        const result = sum(inputArr);

        // Assert
        assert.equal(result, 14);
    })

    it('should return the sum of array when given negative number array', () => {
        // Arrange
        const inputArr = [-2, -3, -4, -5];

        // Act
        const result = sum(inputArr);

        // Assert
        assert.equal(result, -14);
        
    })

    it('should return the sum of array when given mixed number arra', () => {
        // Arrange
        const inputArr = [2, -3, 4, -5];

        // Act
        const result = sum(inputArr);

        // Assert
        assert.equal(result, -2);
        
        
    })

})