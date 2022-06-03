import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    console.log('componentDidmount')
    return () => {
      console.log('componentWillUnmount')
      // componentWillUnmount
    }
  }, []) // componentDidmount

  useEffect(() => {
    console.log('count is changing')
  }, [count]) // call when count is change

  useEffect(() => {
    console.log('name is changing')
  }, [name]) // call when name is change

  useEffect(() => {
    console.log('data is changing')
  }, [data]) // call when data is change

  useEffect(() => {
    console.log('data is changing name property')
  }, [data.name]) // call when data is change


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

  const changeObjectProperties = () => {
    setData({
      name: 'none',
      count: 0
    })
  }

  const changeObjectName = () => {
    setData(preData => ({
      ...preData,
      name: 'Property name'
    }))
  }
  const changeObjectCount = () => {
    setData(preData => ({
      ...preData,
      count: 100
    }))
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
        <button onClick={changeObject}>Change Object by State</button>
        <button onClick={changeObjectProperties}>Change Object by Default</button>
        <button onClick={changeObjectName}>Change Object Name</button>
        <button onClick={changeObjectCount}>Change Object Count</button>
        <hr />
      </div>
    </div>
  )
}

export default UseEffect;
