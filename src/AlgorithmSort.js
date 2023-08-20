//Bubble Sort (Sắp xếp nổi bọt )
const bubbleSort = (arr) => {
  console.log('bubbleSort')
  const arrSort = [...arr]
  const length = arrSort.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i; j < length; j++) {

      if (arrSort[i] > arrSort[j]) {
        const temp = arrSort[i];
        arrSort[i] = arrSort[j];
        arrSort[j] = temp;
      }
    }
  }

  return arrSort
}

//
const insertionSort = (arr) => {
  console.log('insertionSort')
  const arrSort = [...arr]
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const current = arrSort[i];
    let j = i - 1;

    while (j >= 0 && arrSort[j] > current) {
      arrSort[j + 1] = arrSort[j];
      j--;
    }

    arrSort[j + 1] = current;
  }

  return arrSort;
}

//
const selectionSort = (arr) => {
  console.log('selectionSort')
  const arrSort = [...arr]
  const n = arrSort.length;

  const time = new Date()
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arrSort[j] < arrSort[minIndex]) {
        minIndex = j;
      }
    }

    const temp = arrSort[minIndex];
    arrSort[minIndex] = arrSort[i];
    arrSort[i] = temp;
  }
  console.log(new Date() - time)

  return arrSort;
}

//
const mergeSort = (arr) => {
  const arrSort = [...arr]
  if (arrSort.length <= 1) {
    return arrSort;
  }

  const middle = Math.floor(arrSort.length / 2);
  const left = arrSort.slice(0, middle);
  const right = arrSort.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
}


export {
  bubbleSort,
  insertionSort,
  selectionSort,
  mergeSort,
  quickSort
}