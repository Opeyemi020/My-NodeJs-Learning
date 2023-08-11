const chai = require('chai');
const expect = chai.expect;

describe('Sample Test', ()=>  {
    it('should add two numbers correctly ', () => {
        const result = 2 + 3;
        expect(result).to.equal(5);
    });
    
    it('should concatenate two strings', () => {
        const result = 'Hello, ' + 'World!';
        expect(result).to.equal('Hello, World!')
    });

})