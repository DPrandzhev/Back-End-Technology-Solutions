import { isSymmetric } from './check-for-symetry.js'
import {expect} from 'chai'




describe('isSymetric', () => {
    it('should return true if given an empty array', () => {
        // Arrange
        // Arrange
        const inputArray = [];

        // Act
        const result = isSymmetric(inputArray)

        // Assert
        expect(result).to.equal(true);
        
    })

    it('should return false if non-array value is given', () => {
        // Arrange
        

        // Act
        const nanResult = isSymmetric(NaN)
        const undefinedResult = isSymmetric(undefined)
        const nullResult = isSymmetric(null)
        const objectResult = isSymmetric({})
        const stringValue = isSymmetric('string')
        const numericValue = isSymmetric(123)


        // Assert
        expect(nanResult).to.be.false;
        expect(objectResult).to.be.false;
        expect(undefinedResult).to.be.false;
        expect(nullResult).to.be.false;
        expect(stringValue).to.be.false;
        expect(numericValue).to.be.false;

        
    })

    it('should return true if symetric array is given', () => {
        // Arrange
        const inputArray = [3, 2 , 1, 2, 3]

        // Act
        const result = isSymmetric(inputArray)

        // Assert
        expect(result).to.be.true;
        
    })

    it('should return false if non-symetric array is given', () => {
        // Arrange
        const inputArray = [1, 2, 3, 4]

        // Act
        const result = isSymmetric(inputArray)

        // Assert
        expect(result).to.be.false;
        
    })

    it('should return true for a symmetric array with a mix of data types', () => {
        // Arrange
        const inputArray = ['a', 2, true, true, 2, 'a'];
    
        // Act
        const result = isSymmetric(inputArray);
    
        // Assert
        expect(result).to.be.true;
    });

    it('should return true for a symmetric array with a nested array', () => {
        // Arrange
        const inputArray = [1, [2, 3], [3, 2], 1];
    
        // Act
        const result = isSymmetric(inputArray);
    
        // Assert
        expect(result).to.be.false;
    });

    it('should return true for a symmetric array with floating-point numbers', () => {
        // Arrange
        const inputArray = [1.5, 2.3, 1.5];
    
        // Act
        const result = isSymmetric(inputArray);
    
        // Assert
        expect(result).to.be.true;
    });

    it('should return true for a symmetric array with duplicate elements', () => {
        // Arrange
        const inputArray = [1, 2, 2, 1];
    
        // Act 
        const result = isSymmetric(inputArray); 
     
        // Assert 
        expect(result).to.be.true; 
    }); 
     
    it('should return true for a symmetric array with functions as elements', () => { 
        // Arrange 
        const inputArray = [() => {}, () => {}, () => {}]; 
     
        // Act 
        const result = isSymmetric(inputArray); 
     
        // Assert 
        expect(result).to.be.true; 
    }); 

})
