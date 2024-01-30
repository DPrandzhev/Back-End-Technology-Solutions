import { createCalculator } from './add-substract.js'
import {expect} from 'chai'


describe('Add or Substract', () => {
    it('should return zero if no operations are executed', () => {
        // Arrange
        const calculator = createCalculator()

        // Act
        const result = calculator.get()
        

        // Assert
        expect(result).to.equal(0);
        
    })

    it('should substract to negative result when using substract', () => {
        // Arrange

        const calculator = createCalculator()

        // Act
        calculator.subtract(5)
        calculator.subtract(10)
        const result = calculator.get()
        

        // Assert
        expect(result).to.equal(-15);

        
    })

    it('should return positive value when only adding numbers', () => {
        // Arrange

        const calculator = createCalculator()

        // Act
        calculator.add(5)
        calculator.add(10)
        const result = calculator.get()
        

        // Assert
        expect(result).to.equal(15);

        
    })

    it('should return result when using both add and subtract - positive result', () => {
        // Arrange

        const calculator = createCalculator()

        // Act
        calculator.add(5)
        calculator.add(10)
        calculator.subtract(5)
        calculator.add(3)
        calculator.subtract(10)
        const result = calculator.get()
        

        // Assert
        expect(result).to.equal(3);
        
    })

    it('should return result when using both add and subtract - negative result', () => {
        // Arrange

        const calculator = createCalculator()

        // Act
        calculator.add(5)
        calculator.add(10)
        calculator.subtract(5)
        calculator.add(3)
        calculator.subtract(10)
        calculator.subtract(5)
        const result = calculator.get()
        

        // Assert
        expect(result).to.equal(-2);
        
        
    })

    it('should handle strings as values', () => {
        // Arrange

        const calculator = createCalculator()

        // Act
        calculator.add('5')
        calculator.add('10')
        const result = calculator.get()
        

        // Assert
        expect(result).to.equal(15);

        
    })

    it('should handle mixed inputs as values', () => {
        // Arrange

        const calculator = createCalculator()

        // Act
        calculator.add('5')
        calculator.add(10)
        const result = calculator.get()
        

        // Assert
        expect(result).to.equal(15);

        
    })
})
