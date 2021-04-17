this.insertionSort = function() {
    const length = array.length;
    let j = 0;
    let temp = 0;

    for (let i = 1; i < length; i++) {
        j = i;
        temp = array[i];
        while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
        }
        array[j] = temp;
    }
}

const array = [3, 1, 2, 4, 5];
this.insertionSort();
console.log(array);