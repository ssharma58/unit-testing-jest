const multiply =require('./multiply')

test ('properly multiplying two elements',()=>{
    expect(multiply(2,3)).toBe(6)
})