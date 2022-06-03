import React from 'react';
import VerticalTable from '../../../components/VerticalTable';
import HorizontalTable from '../../../components/HorizontalTable';
import Wrapper from './Wrapper';

function ScrollToPage() {
  const rowsTop = new Array(50).fill(null);
  const rowsBottom = new Array(50).fill(null);

  const easeInOutQuad = (t, b, c, d) =>{
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  const scrollTo = (element, to, typeScroll, duration = 1000) => {
    const start = element[typeScroll];
    const change = to - start;
    let currentTime = 0;
    const increment = 20;
        
    const animateScroll = function(){
        currentTime += increment;
        var val = easeInOutQuad(currentTime, start, change, duration);
        element[typeScroll] = val;
        if(currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
  }

  const renderTop = () => rowsTop.map(() => <div key={Math.random()}>row</div>)
  const renderBottom = () => rowsBottom.map(() => <div key={Math.random()}>row</div>)

  const scrollVertical = ({ widthAnimation = false }) => {
    const cellElm = document.querySelector('#vertical-td-20-0');
    const tableElm = cellElm.closest('table');
    const wrapTableElm = tableElm.parentElement;
    const scrollDiv = document.querySelector('#scroll-div');
    cellElm.style.backgroundColor = 'red';

    if (widthAnimation) {
      const duration = 1000;
      scrollTo(scrollDiv, tableElm.offsetTop, 'scrollTop', duration)
      setTimeout(() => {
        scrollTo(wrapTableElm, cellElm.offsetTop - tableElm.tHead.offsetHeight, 'scrollTop', duration)
      }, duration)
    } else {
      scrollDiv.scrollTop = tableElm.offsetTop
      wrapTableElm.scrollTop = cellElm.offsetTop - tableElm.tHead.offsetHeight
    }
  }

  const scrollHorizontal = ({ widthAnimation = false }) => {
    const cellElm = document.querySelector('#horizontal-td-6-39');
    const tableElm = cellElm.closest('table');
    // const cellFirst = tableElm.rows[1].cells[0]
    let widthOfCellsSticky = 0;
    for (let i = 0; i < tableElm.rows[1].cells.length; i++) {
      const position = window.getComputedStyle(tableElm.rows[1].cells[i]).getPropertyValue('position')
      if (position === 'sticky') {
        widthOfCellsSticky += tableElm.rows[1].cells[i].offsetWidth
      } else {
        break
      }
      console.log(position)
    }

    const wrapTableElm = tableElm.parentElement;
    const scrollDiv = document.querySelector('#scroll-div');
    cellElm.style.backgroundColor = 'red';

    if (widthAnimation) {
      const duration = 1000;
      scrollTo(scrollDiv, tableElm.offsetTop, 'scrollTop', duration)
      setTimeout(() => {
        scrollTo(wrapTableElm, cellElm.offsetLeft - widthOfCellsSticky, 'scrollLeft', duration)
      }, duration)
    } else {
      const wrap = document.querySelector('.my-table')
      const wrapParent = wrapTableElm.parentElement;
      
      const scrollTopParent = scrollDiv.scrollTop + wrapParent.getBoundingClientRect().top;
      console.log(scrollTopParent, 'wrapParent.getBoundingClientRect().top')
      console.log(scrollDiv.getBoundingClientRect().top, 'scrollDiv.getBoundingClientRect().top')
      // scrollDiv.scrollTop = tableElm.offsetTop
      
      // scrollDiv.scrollTop = scrollTopParent
      //==
      // scrollTo(scrollDiv, scrollTopParent, 'scrollTop', 1000)
      wrapTableElm.scrollLeft = cellElm.offsetLeft - widthOfCellsSticky
      wrapTableElm.scrollTop = cellElm.offsetTop - tableElm.tHead.offsetHeight
      wrap.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
      //==
      // const wrap = document.querySelector('.my-table')
      // const top = scrollDiv.scrollTop + wrap.getBoundingClientRect();
      // console.log(top, 'topp')
      // console.log(scrollDiv.scrollTop, 'topp2')
    }
  }

  return (
    <Wrapper id='scroll-div' className={'contain-scroll'}>
      <div className={'buttons'}>
        <button onClick={scrollVertical}>scroll Ver</button>
        <button onClick={scrollHorizontal}>scroll Hor</button>
        <button onClick={() => scrollVertical({ widthAnimation: true })}>scroll Ver animate</button>
        <button onClick={() => scrollHorizontal({ widthAnimation: true })}>scroll Hor animate</button>
      </div>
      {renderTop()}
      <VerticalTable />
      <HorizontalTable className='my-table' />
      {renderBottom()}
    </Wrapper>
  )
}

export default ScrollToPage;
