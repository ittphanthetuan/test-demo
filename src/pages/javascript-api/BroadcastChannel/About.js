import React, { useEffect } from 'react';
import Link from 'next/link'
import { testChannel } from './utils'

const About = () => {
  useEffect(() => {
    /** window message */
    // window.addEventListener("message", (event) => {
    //   console.log('about')
      
    //   if (event.origin !== "http://localhost:3000")
    //     return;
    //     const targetWindow = window.opener
    //     console.log(targetWindow)
    //     targetWindow.postMessage('aaaa')
    // }, false);

    /** boadcast channel */
    testChannel.onmessage = event => { console.log(event, 'about'); }
  }, [])
  const handleClick = () => {
    window.open('detail')
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
        <Link to="/detail" target='_blank'>Detail</Link>
        {/* <button onClick={handleClick}>Detail</button> */}
      </nav>
    </>
  )
}

export default About;