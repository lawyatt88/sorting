function split(wholeArray) {
    var splitPoint = Math.floor(wholeArray.length/2);

    var firstHalf = wholeArray.slice(0, splitPoint);
    var secondHalf = wholeArray.slice(splitPoint);
    
    return [firstHalf, secondHalf];
}   

function merge(firstHalf, secondHalf) {
    var pointer1 = 0;
    var pointer2 = 0;
    var mergedArray = [];
    while (pointer1 < firstHalf.length || pointer2 < secondHalf.length) {
        if (firstHalf[pointer1] < secondHalf[pointer2]) {
            mergedArray.push(firstHalf[pointer1]);
            pointer1++;
        } else {
            mergedArray.push(secondHalf[pointer2]);
            pointer2++; 
        }
    }
    if (pointer1 === firstHalf.length - 1) {
        mergedArray.push(secondHalf.slice(pointer2)); 
    } else {
        mergedArray.push(firstHalf.slice(pointer1));    
    }
    return mergedArray;
}