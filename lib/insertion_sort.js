function insertionSort(array) {
  var sorted = []
  sorted.push(array.shift())

  do {
    sorted.push(array.shift())

    for(var i = sorted.length - 1; i > 0; i--) {
      if(sorted[i] < sorted[i - 1]) {
        var temp = sorted[i]
        sorted[i] = sorted[i - 1]
        sorted[i - 1] = temp
      }

    }

  } while(array.length > 0);

  return sorted;

}

module.exports = insertionSort
