import React from 'react';
import VerticalTable from '../../../components/VerticalTable';
import HorizontalTable from '../../../components/HorizontalTable';
import Wrapper from './Wrapper';

function ScrollToPage() {
  const rowsTop = new Array(50).fill(null);
  const rowsBottom = new Array(50).fill(null);

  const renderTop = () => rowsTop.map(() => <div key={Math.random()}>row</div>)
  const renderBottom = () => rowsBottom.map(() => <div key={Math.random()}>row</div>)

  const scrollVertical = () => {
    const cellElm = document.querySelector('#vertical-td-20-0');
    const tableElm = cellElm.closest('table');
    cellElm.style.backgroundColor = 'red';
    const pos = cellElm.position;
    const top = cellElm.top;
    cellElm.style.position = 'relative';
    cellElm.style.top = `-${tableElm.tHead.offsetHeight}px`
    cellElm.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    cellElm.style.top = top === undefined ? '' : top;
    cellElm.style.position = pos === undefined ? '' : pos;
  }

  const scrollHorizontal = () => {
    const cellElm = document.querySelector('#horizontal-td-0-40');
    cellElm.style.backgroundColor = 'red';
    const pos = cellElm.position;
    const top = cellElm.top;
    cellElm.style.position = 'relative';
    cellElm.style.top = `-${cellElm.offsetTop}px`
    cellElm.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    cellElm.style.top = top === undefined ? '' : top;
    cellElm.style.position = pos === undefined ? '' : pos;
  }

  return (
    <Wrapper id='scroll-div' className={'contain-scroll'}>
      <div className={'buttons'}>
        <button onClick={scrollVertical}>scroll Ver</button>
        <button onClick={scrollHorizontal}>scroll Hor</button>
      </div>
      {renderTop()}
      <VerticalTable />
      <HorizontalTable />
      {renderBottom()}
    </Wrapper>
  )
}

export default ScrollToPage;
