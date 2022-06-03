import React from 'react';
// import Sort from '../Sort';
import MinHeap from '../utils/heap/MinHeap';

function HeapSort() {
  const data = [6, 5, 3, 1, 8 ,7, 2, 4];
  const dataStart = data.join(', ');
  // const objSort = new Sort();

  const sort = (originalArray) => {
    const sortedArray = [];
    const minHeap = new MinHeap();
    // const minHeap = new MinHeap(objSort.callbacks.compareCallback);

    // Insert all array elements to the heap.
    originalArray.forEach((element) => {
      // Call visiting callback.
      // console.log(objSort.callbacks)
      // objSort.callbacks.visitingCallback(element);

      minHeap.add(element);
    });
    // console.log(minHeap.heapContainer, 'minHeap')
    // Now we have min heap with minimal element always on top.
    // Let's poll that minimal element one by one and thus form the sorted array.
    while (!minHeap.isEmpty()) {
      const nextMinElement = minHeap.poll();

      // Call visiting callback.
      // objSort.callbacks.visitingCallback(nextMinElement);

      sortedArray.push(nextMinElement);
    }
    // console.log(sortedArray, 'sortedArray')
    return sortedArray;
  }


  return (
    <div>
      {dataStart}
      <hr />
      {sort(data).join(', ')}
    </div>
  )
}

export default HeapSort;
