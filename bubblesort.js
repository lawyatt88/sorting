function swap(array, num1, num2){
    var smallerEl = array[num2];
    array[num2] = array[num1];
    array[num1] = smallerEl;
}

function bubbleSort(array) {
    var finalPlace = array.length -1;
  while (finalPlace >= 0) {
      for (var i = 0; i < finalPlace; i++) {
                var pointer1 = i;
              var pointer2 = i+1;
          if (array[pointer1] > array[pointer2]) {
            //   var smallerEl = array[pointer2];
            //   array[pointer2] = array[pointer1];
            //   array[pointer1] = smallerEl;
            swap(array, pointer1, pointer2);
          }
      }
        finalPlace--;
  }
  return array;
}