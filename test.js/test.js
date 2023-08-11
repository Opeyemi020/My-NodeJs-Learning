const isEven = require("../index");
const {expect} = require("chai");

describe("isEven", ()=> {
    it("return true if number is even", ()=> {
        expect(isEven(2)).to.equal(true);
    });

    it("return false if number is odd", ()=> {
        expect(isEven(3)).to.equal(false);
    });
    it("throw an error if number is negative", ()=> {
        expect(()=> isEven(-1).to.throw());
    });
    it("throw an error if Number is not a number", ()=>{
        expect(()=>isEven("1").to.throw());
    });
});