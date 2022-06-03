import React, { useEffect, useState } from 'react';
import dataArr from './dataArr';

function Minesweeper() {
  // left 5 is 5
  const positionDefault = {
    top: 5,
    left: 0
  };

  useEffect(() => {
    const dataCheck = checkArr(positionDefault, positionDefault);
    dataArr[positionDefault.top][positionDefault.left] = `(${dataArr[positionDefault.top][positionDefault.left]})`
    console.table(dataCheck);
  })

  const checkItemsAround = (position) => {
    const arr = []
    for (let i = position.top - 1; i < position.top + 2; i++) {
      for (let j = position.left - 1; j < position.left + 2; j++ ) {
        if (i === position.top && j === position.left) continue;
        if (i >= 0 && j >= 0 && i < dataArr.length && j < dataArr[i].length) {
          arr.push({
            top: i,
            left: j
          })
        }
      }
    }
    return arr;
  }

  const checkArr = (position) => {
    const data = dataArr[position.top][position.left];
    if (data === 0 && data !== undefined) {
      dataArr[position.top][position.left] = dataArr[position.top][position.left]+''
      const arrAround = checkItemsAround(position)
      arrAround.forEach(arr => {
        checkArr(arr)
      })
    }
    return dataArr;
  };

  return (
    <div>
    </div>
  );
}

export default Minesweeper;