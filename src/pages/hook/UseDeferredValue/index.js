import React, { useState, Suspense, useMemo, useDeferredValue } from 'react';
import { Form } from 'react-bootstrap';
import ViewValueInput from './ViewValueInput'

function UseDeferredValue() {
  const [query, setQuery] = useState('')

  // Memoizing tells React to only re-render when deferredQuery changes,
  // not when query changes.
  // const suggestions = useMemo(() =>
  //   <ViewValueInput value={deferredQuery} />,
  //   [deferredQuery]
  // );

  const handleChangeInput = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Form.Control
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          onChange={handleChangeInput}
        />
      <ViewValueInput value={query} />
    </>
  );
}

export default UseDeferredValue;