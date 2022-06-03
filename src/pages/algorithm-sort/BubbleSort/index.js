import React from 'react';

function BubbleSort() {
  const data = [6, 5, 3, 1, 8 ,7, 2, 4];
  const dataStart = data.join(', ');

  const sort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let isWrap = false
      for(let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          isWrap = true;
        }
      }

      if (!isWrap) return arr;
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

export default BubbleSort;
