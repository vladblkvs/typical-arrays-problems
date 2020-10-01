const sort = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
};

exports.min = function min (array = [0]) {
    sort(array);
    return array[0] || 0;
}

exports.max = function max (array = [0]) {
    sort(array);
    return array[array.length - 1] || 0;
}

exports.avg = function avg (array = [0]) {
    const newArray = array.reduce((accum, current) => {
        return accum + current;
    }, 0);
    return newArray / array.length || 0;
}
