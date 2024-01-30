import { isOddOrEven } from './even-or-odd.js';
import { expect } from 'chai'



describe('Even or Odd', () => {
    it('should return undefined when input is not a string', () => {
        

        // Act
        const intInput = isOddOrEven(12345)
        const boolInput = isOddOrEven(true)
        const objectInput = isOddOrEven({})
        const arrinput = isOddOrEven([])
        const nullInput = isOddOrEven(null);

        // Assert
        expect(intInput).to.be.undefined
        expect(boolInput).to.be.undefined
        expect(objectInput).to.be.undefined
        expect(arrinput).to.be.undefined
        expect(nullInput).to.be.undefined

        
    })

    it('should return even for an empty string', () => {
        // Arrange
        const strInput = '';
    
        // Act
        const result = isOddOrEven(strInput);
    
        // Assert
        expect(result).to.equal('even');
    });
    

    it('should return even if string lenght is even', () => {

        // Arrange
        const strInput = 'this is even'

        // Act
        const result = isOddOrEven(strInput)

        // Assert
        expect(result).to.equal('even');
    })

    it('should return odd if string lenght is odd', () => {

        // Arrange
        const strInput = 'this is odd'

        // Act
        const result = isOddOrEven(strInput)

        // Assert
        expect(result).to.equal('odd');
        
    })

})