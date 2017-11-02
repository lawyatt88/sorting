describe('Bubble Sort', function(){
    beforeAll(function () {
        var testArr = [2, 6, 1];
      spyOn(window, 'sort').and.callThrough(); // replace existing `tootsiepop['lick']` method
    });
    it('number of sorts to equal 2', function () {
      bubbleSort(testArr);
      expect(window.sort.calls.count()).toEqual(2);
    });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with 1 element', function(){
      expect( bubbleSort([3]) ).toEqual( [3] );
  });
  it('handles an array with more than 1 element', function(){
      expect( bubbleSort([2, 6, 1, 10, 30, 15, 2, 8, 5]) ).toEqual( [1, 2, 2, 5, 6, 8, 10, 15, 30] );
  });
  
  

});

