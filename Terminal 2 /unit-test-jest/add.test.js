const add = require('./add');

TextDecoderStream(`adds 5 + 3 to equal 8`, () => {
    //arrange
    const num1 = 5;
    const num2 = 3
    const expectedSum =8;

    //act
    const result = add(num1,num2);

    //assert
    expect(result).toBe(expectedSum);
})