import { mathEnforcer } from './math-enforcer.js';
import { expect } from 'chai'


describe('Math Enforcer', () => {
    it('addFive: should return undefined if paramater is not a number', () => {

        // Arrange
        const param = '123';

        // Act
        const result = mathEnforcer.addFive(param);
        

        // Assert
        expect(result).to.be.undefined;
        
    })

    it('addFive: should return undefined if paramater is undefined', () => {

        // Arrange
        const param = 'undefined';

        // Act
        const result = mathEnforcer.addFive(param);
        

        // Assert
        expect(result).to.be.undefined;
        
    })

    it('addFive: should return result if parameter is a number', () => {

        // Arrange
        const param = 10;

        // Act
        const result = mathEnforcer.addFive(param);
        

        // Assert
        expect(result).to.equal(15);
        
    })

    it('addFive: should return exact result with closeTo if parameter is a floating point', () => {

        // Arrange
        const param = 1.01;

        // Act
        const result = mathEnforcer.addFive(param);
        

        // Assert
        expect(result).to.be.closeTo(6.01, 0.01)

    })

    it('addFive: should return exact result with closeTo if parameter is a floating point with a lot of digits', () => {

        // Arrange
        const param = 1.00001;

        // Act
        const result = mathEnforcer.addFive(param);
        

        // Assert
        expect(result).to.be.closeTo(6.01, 0.01)

    })

    it('addFive: should return exact result if parameter is a floating point', () => {

        // Arrange
        const param = 1.01;

        // Act
        const result = mathEnforcer.addFive(param);
        

        // Assert
        expect(result).to.equal(6.01);

    })

    it('addFive: should handle edge cases', () => {
        // Arrange
        const largePositive = 999999999;
        const largeNegative = -999999999;
        const zero = 0;
    
        // Act
        const resultPositive = mathEnforcer.addFive(largePositive);
        const resultNegative = mathEnforcer.addFive(largeNegative);
        const resultZero = mathEnforcer.addFive(zero);
    
        // Assert
        expect(resultPositive).to.equal(1000000004);
        expect(resultNegative).to.equal(-999999994);
        expect(resultZero).to.equal(5);
    })
    



    it('subtractTen: should return undefined if paramater is not a number', () => {

        // Arrange
        const param = '123';

        // Act
        const result = mathEnforcer.subtractTen(param);
        

        // Assert
        expect(result).to.be.undefined;
    })

    it('subtractTen: should return result if parameter is a number', () => {

        // Arrange
        const param = 10;

        // Act
        const result = mathEnforcer.subtractTen(param);
        

        // Assert
        expect(result).to.equal(0);
        
    })

    it('subtractTen: should return exact result with closeTo if parameter is a floating point', () => {

        // Arrange
        const param = 1.01;

        // Act
        const result = mathEnforcer.subtractTen(param);
        

        // Assert
        expect(result).to.be.closeTo(-8.99, 0.01)

    })

    it('subtractTen: should return exact result with closeTo if parameter is a floating point with a lot of digits', () => {

        // Arrange
        const param = 1.0000001;

        // Act
        const result = mathEnforcer.subtractTen(param);
        

        // Assert
        expect(result).to.be.closeTo(-8.99, 0.01)

    })


    it('subtractTen: should return result if parameter is a floating point', () => {

        // Arrange
        const param = 1.01;

        // Act
        const result = mathEnforcer.subtractTen(param);
        

        // Assert
        expect(result).to.equal(-8.99)

    })

    it('subtractTen: should handle edge cases', () => {
        // Arrange
        const largePositive = 999999999;
        const largeNegative = -999999999;
        const zero = 0;
    
        // Act
        const resultPositive = mathEnforcer.subtractTen(largePositive);
        const resultNegative = mathEnforcer.subtractTen(largeNegative);
        const resultZero = mathEnforcer.subtractTen(zero);
    
        // Assert
        expect(resultPositive).to.equal(999999989);
        expect(resultNegative).to.equal(-1000000009);
        expect(resultZero).to.equal(-10);
    });

    

    it('sum: should return undefined if first parameter is not a number, but second is correct', () => {

        // Arrange
        const firstParam = '123';
        const secondParam = 10;

        // Act
        const result = mathEnforcer.sum(firstParam, secondParam);
        

        // Assert
        expect(result).to.be.undefined;
        
    })

    it('sum: should return undefined if first parameter is correct, but second is not a number', () => {

        // Arrange
        const firstParam = 123;
        const secondParam = '10';

        // Act
        const result = mathEnforcer.sum(firstParam, secondParam);
        

        // Assert
        expect(result).to.be.undefined;
        
    })

    it('sum: should return the result if both numbers are correct', () => {

        // Arrange
        const firstParam = 123;
        const secondParam = 10;

        // Act
        const result = mathEnforcer.sum(firstParam, secondParam);
        

        // Assert
        expect(result).to.equal(133);
        
    })

    it('sum: should return exact result with closeTo if both numbers are correct and they are floating numbers', () => {

        // Arrange
        const firstParam = 10.5;
        const secondParam = 3.14;

        // Act
        const result = mathEnforcer.sum(firstParam, secondParam);
        

        // Assert
        expect(result).to.be.closeTo(13.64, 0.01);
        
    })

    it('sum: should return result if both numbers are correct and they are floating numbers', () => {

        // Arrange
        const firstParam = 10.5;
        const secondParam = 3.14;

        // Act
        const result = mathEnforcer.sum(firstParam, secondParam);

        // Assert
        expect(result).to.equal(13.64)


    })

    it('sum: should return exact result with closeTo if both numbers are correct and they are floating numbers', () => {

        // Arrange
        const firstParam = 10.50000000;
        const secondParam = 3.014;

        // Act
        const result = mathEnforcer.sum(firstParam, secondParam);
        

        // Assert
        expect(result).to.be.closeTo(13.514, 0.01);

    })

    it('sum: should handle edge cases', () => {
        // Arrange
        const largePositive1 = 999999999;
        const largePositive2 = 888888888;
        const largeNegative1 = -999999999;
        const largeNegative2 = -888888888;
        const zero = 0;
    
        // Act
        const resultPositive = mathEnforcer.sum(largePositive1, largePositive2);
        const resultNegative = mathEnforcer.sum(largeNegative1, largeNegative2);
        const resultMixed = mathEnforcer.sum(largePositive1, largeNegative2);
        const resultZero = mathEnforcer.sum(zero, zero);
    
        // Assert
        expect(resultPositive).to.equal(1888888887);
        expect(resultNegative).to.equal(-1888888887);
        expect(resultMixed).to.equal(111111111);
        expect(resultZero).to.equal(0);
    });
    
})

