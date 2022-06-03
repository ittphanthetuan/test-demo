import React from 'react';

function BubbleSortPage() {
  const data = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7];
  const dataStart = data.join(', ');

  const sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for(let j = i + 1; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
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

export default BubbleSortPage;
