describe('Newfangled Function',()=>{
  describe('Array Slice ',()=>
       it('Test case - 1',()=>{
            expect(slice).toBeDefined();
            expect(slice(['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'],1,4)).toEqual(["burger", "fingerChips", "donuts"])
       })     
  ),
  describe('Array Splice ',()=>
       it('Test case - 1',()=>{
            expect(splice).toBeDefined();
            expect(splice(['pizza', 'burger', 'fingerShips', 'donuts', 'springRoll'],1,0)).toEqual(["pizza", "noodles", "icecream", "burger", "fingerShips", "donuts", "springRoll"])
            expect(splice(['pizza', 'burger', 'fingerShips', 'donuts', 'springRoll'],1,2)).toEqual(["pizza", "noodles", "icecream", "donuts", "springRoll"])
       })     
  ),
  describe('Filter  ',()=>
       it('Test case - 1',()=>{
            expect(isPrime).toBeDefined();
            expect([12,324,213,4,2,3,45,4234].filter(isEven)).toEqual([12, 324, 4, 2, 4234])
            expect(isEven).toBeDefined();
            expect([12,324,213,4,2,3,45,4234].filter(isPrime)).toEqual([2, 3])
       }),     
  ),
  describe('Reject  ',()=>
       it('Test case - 1',()=>{
            expect(nonPrime).toBeDefined();
            expect([12,324,213,4,2,3,45,4234].filter(nonPrime)).toEqual([12, 324, 213, 4, 45, 4234])
       })     
  )
  describe('Lambda ',()=>
       it('Test case - 1',()=>{
            expect(lambda_isEven).toBeDefined();
            expect([12,324,213,4,2,3,45,4234].filter(lambda_isEven)).toEqual([12, 324, 4, 2, 4234])
       })     
  ),
  describe('Map ',()=>
       it('Test case - 1',()=>{
            expect(findSquareOfNumbers).toBeDefined();
            expect([11, 34, 20, 5, 53, 16].map(findSquareOfNumbers)).toEqual([121, 1156, 400, 25, 2809, 256])
       })     
  )
  describe('Reduce ',()=>
       it('Test case - 1',()=>{;
            expect([2, 3, 5, 10].reduce(multiply, 1)).toBe(300)
            expect([2, 3, 5, 10].map( findSquareOfNumbers).reduce(multiply, 1)).toBe(90000)
       })     
  )
})