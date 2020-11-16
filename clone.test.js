const cloneArray = require('./cloneArray')
test('Array is properly cloned',()=>{
    const array =[1,2,3,4]
  //  expect(cloneArray(array)).toBe(array)
    expect(cloneArray(array)).toEqual(array)

    expect(cloneArray(array)).not.toBe(array)

})