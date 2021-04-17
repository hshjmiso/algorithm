this.quickSort = function() {
    quick(array, 0, array.length - 1);
};

const quick = function(array, left, right) {
    let index = 0;

    if (array.length > 1) {
        index = partition(array, left, right);

        if (left < index - 1) {
            quick(array, left, index - 1);
        }

        if (index < right) {
            quick(array, index, right);
        }
    }
};

const partition = function(array, left, right) {
    let pivot = array[Math.floor((left + right) / 2)]

    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swapQuickSort(array, left, right);
            left++;
            right--;
        }
    }
    return left;
}

const swapQuickSort = function(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

const array = [3, 1, 2, 4, 5];
this.quickSort();
console.log(array);