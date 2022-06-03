import React, { useEffect } from 'react';
import Link from 'next/link'
import { testChannel } from '../utils'

const Home = () => {
  useEffect(() => {
    /** window message */
    // window.addEventListener("message", (event) => {
    //   console.log('home')
    //   if (event.origin !== "http://localhost:3000")
    //     return;
    //   // Do something
    // }, false);
    /** boadcast channel */
    testChannel.onmessage = event => { console.log('home'); }
  }, [])
  const handleClick = () => {
    window.open('about')
  }
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about" target="_blank">About</Link>
        {/* <button onClick={handleClick}>About</button> */}
      </nav>
    </>
  )
}

export default Home;