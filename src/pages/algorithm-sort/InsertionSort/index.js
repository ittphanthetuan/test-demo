import React from 'react';

function InsertionSort() {
  const data = [6, 5, 3, 1, 8 ,7, 2, 4];
  const dataStart = data.join(', ');

  const sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let currentIndex = i;

      while(
        arr[currentIndex] !== undefined
        && (arr[currentIndex] > arr[currentIndex + 1])
      ) {
        [arr[currentIndex], arr[currentIndex + 1]] = [arr[currentIndex + 1], arr[currentIndex]]
        currentIndex--;
      }
    }
    return arr;
  }


  return (
    <div>
      {dataStart}
      <hr />
      {sort(data).join(', ')}
    </div>
  )
}

export default InsertionSort;
