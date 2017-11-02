function split(wholeArray) {
    var splitPoint = Math.floor(wholeArray.length/2);

    var firstHalf = wholeArray.slice(0, splitPoint);
    var secondHalf = wholeArray.slice(splitPoint);
    
    return [firstHalf, secondHalf];
}