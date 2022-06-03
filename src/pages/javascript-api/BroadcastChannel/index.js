import React, { useEffect } from 'react';
// import { testChannel } from './utils'

const Home = () => {
  useEffect(() => {
    // /** window message */
    // // window.addEventListener("message", (event) => {
    // //   console.log('home')
    // //   if (event.origin !== "http://localhost:3000")
    // //     return;
    // //   // Do something
    // // }, false);
    // /** boadcast channel */
    // const testChannel = new BroadcastChannel('test_channel')
    // // testChannel.onmessage = event => { console.log('home'); }
  }, [])

  // const handleClick = () => {
  //   window.open('about')
  // }

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <a href="Broadcast-Channel-API/about" target="_blank">Go About</a>
        {/* <button onClick={handleClick}>About</button> */}
      </nav>
    </>
  )
}

export default Home;