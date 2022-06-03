import React, { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [data, setData] = useState({});

  const plusCount = () => {
    setCount(preCount => preCount + 1);
  }

  const minusCount = () => {
    setCount(preCount => preCount - 1);
  }

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeObject = () => {
    setData({
      name,
      count
    })
  }

  return (
    <div>
      <div>
        <h3>Count: {count}</h3>
        <button onClick={plusCount}>Plus</button>
        <button onClick={minusCount}>Minus</button>
        <hr />

        <h3>Name: {name}</h3>
        <input type='text' onChange={changeName} />
        <hr />

        <h3>Data: {JSON.stringify(data)}</h3>
        <button onClick={changeObject}>Change Object</button>
        <hr />
      </div>
    </div>
  )
}

export default UseState;
