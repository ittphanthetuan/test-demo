// useImperativeHandle(ref, createHandle, [deps])
import React, { useImperativeHandle, useRef, forwardRef, useEffect } from 'react';

const FancyInput = forwardRef(function (props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} />;
})


function UseImperativeHandle() {
  const ref = useRef();
  useEffect(() => {
    console.log(ref, 'ref')
    ref && ref.current.focus();
  }, [])

  return (
    <div>
      <FancyInput ref={ref} />
    </div>
  )
}

export default UseImperativeHandle;
