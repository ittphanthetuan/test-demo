import React, { useEffect } from 'react';
import Link from 'next/link'
import { testChannel } from './utils'

const Detail = () => {
  useEffect(() => {
    /** window message */
    // window.addEventListener("message", (event) => {
    //   console.log('detail')
    //   if (event.origin !== "http://localhost:3000")
    //     return;
    //   // Do something
    // }, false);
  }, [])

  const handleClick = () => {
    /** boadcast channel */
    testChannel.postMessage({ msg: 'ola'})
    /** window message */
    // const targetWindow = window.opener
    // console.log(targetWindow)
    // targetWindow.postMessage('aaaa')
  }
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        {/* <Link to="/" target='_blank'>Home</Link> */}
      </nav>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default Detail;