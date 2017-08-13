function compare(array) {

  do {
    var sorted = false

    for(var i = 0; i < array.length; i++) {

      if(array[i] > array[i + 1]) {
        var temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        sorted = true
      }
    }
  } while(sorted);

  return array;
}

module.exports = compare
