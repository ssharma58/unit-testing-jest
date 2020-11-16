const sum = require('./sum')
test('proprerly adds two numbers', () =>{

// if(sum(1,2) ===3){}
// else
// throw console.error('error');


expect(sum(1,2)).toBe(3)

})
