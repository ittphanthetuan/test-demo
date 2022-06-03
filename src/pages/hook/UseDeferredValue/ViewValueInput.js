import React, { Suspense, useMemo, useDeferredValue, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

function ViewValueInput({ query }) {
  const SIZE = 20000
  const deferredQuery = useDeferredValue(query)
  useEffect(() => {
    console.log(`query: ${query} <=> deferredQuery: ${deferredQuery}`)
    console.log()
  }, [query, deferredQuery])

  const com = useMemo(() => {
    const arr = [];
    for (let i = 0; i < SIZE; i++) {
      arr.push(<Alert variant='primary'>{deferredQuery}</Alert>)
    }
    return arr;
  }, [deferredQuery])
  // ==============================================
  // const com = useMemo(() => {
  //   const arr = [];
  //   for (let i = 0; i < SIZE; i++) {
  //     arr.push(<Alert variant='primary'>{query}</Alert>)
  //   }
  //   return arr;
  // }, [query])
  // ==============================================
  // const com = () => {
  //   const arr = [];
  //   for (let i = 0; i < SIZE; i++) {
  //     arr.push(<Alert variant='primary'>{query}</Alert>)
  //   }
  //   return arr;
  // }

  return (
    <>
      <Suspense fallback="Loading results...">
        {com}
      </Suspense>
    </>
  );
}

export default ViewValueInput;