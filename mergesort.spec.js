describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([5, 8, 7, 2, 3, 1]) ).toEqual( [[5, 8, 7], [2, 3, 1]] );
    expect( split([5, 4, 10, 1, 8]) ).toEqual( [[5, 4], [10, 1, 8]] );
  });
  
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([[1, 2, 7], [3, 5, 8]]) ).toEqual( [1, 2, 3, 5, 7, 8] );
  });
});