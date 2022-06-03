import React from 'react';
import VerticalTableInner from '../../../components/VerticalTableInner';
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

  const scrollTo = (element, to, typeScroll, duration) => {
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
    const cellElm = document.querySelector('#table-1-horizontal-td-0-0');
    const tableElm = cellElm.closest('table');
    
    
    const scrollDiv = document.querySelector('#scroll-div');

    const tableParent = scrollDiv.querySelector('table');
    const wrapTableElm = tableParent.parentElement;

    const rowParent = tableElm.closest('tr')


    // if (widthAnimation) {
    //   const duration = 1000;
    //   scrollTo(scrollDiv, tableElm.offsetTop, 'scrollTop', duration)
    //   setTimeout(() => {
    //     scrollTo(wrapTableElm, cellElm.offsetTop - tableElm.tHead.offsetHeight, 'scrollTop', duration)
    //   }, duration)
    // } else {
      let elm = tableElm
      let off = cellElm.offsetTop
      const cellId = cellElm.closest('#cell-id')
      while(elm && !elm.isEqualNode(cellId)) {
        console.log(elm, cellId)
        console.log(elm.isEqualNode(cellId))
        console.log(elm.firstChild, cellId.firstChild)
        console.log('======')
        off += elm.offsetTop
        elm = elm.offsetParent
      }
      console.log(off, 'off')
      cellElm.style.backgroundColor = 'red'
      scrollDiv.scrollTop = tableParent.offsetTop
      wrapTableElm.scrollTop = rowParent.offsetTop - tableElm.tHead.offsetHeight + off
    // }
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
      scrollDiv.scrollTop = tableElm.offsetTop
      wrapTableElm.scrollLeft = cellElm.offsetLeft - widthOfCellsSticky
      wrapTableElm.scrollTop = cellElm.offsetTop - tableElm.tHead.offsetHeight
    }
  }

  return (
    <Wrapper id='scroll-div' className='contain-scroll'>
      <div className='buttons'>
        <button onClick={scrollVertical}>scroll Ver</button>
        <button onClick={scrollHorizontal}>scroll Hor</button>
        <button onClick={() => scrollVertical({ widthAnimation: true })}>scroll Ver animate</button>
        <button onClick={() => scrollHorizontal({ widthAnimation: true })}>scroll Hor animate</button>
      </div>
      {renderTop()}
      <VerticalTableInner />
      {renderBottom()}
    </Wrapper>
  )
}

export default ScrollToPage;
