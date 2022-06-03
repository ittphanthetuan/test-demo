import React from 'react';
import Wrapper from './Wrapper';

function HorizontalTable(props) {
  const { rows = 30, cols = 50, className, name } = props
  const arrRows = new Array(rows).fill(null);
  const arrCols = new Array(cols).fill(null);
  return (
    <Wrapper className={`${className} contain-table`}>
      <h1>HorizontalTable</h1>
      <div className='table'>
        <table>
          <thead>
            <tr>
              {arrCols.map((itemCol, indexCol) => {
                const keyId = `horizontal-th-${indexCol}`;
                return <th key={keyId} id={keyId}>header {indexCol}</th>
              })}
            </tr>
          </thead>

          <tbody>
            {arrRows.map((itemRow, indexRow) => (
              <tr key={`row-${indexRow}`}>
                {arrCols.map((itemCol, indexCol) => {
                  const keyId = `${name ? `${name}-` : ''}horizontal-td-${indexRow}-${indexCol}`;
                  return <td key={keyId} id={keyId}>col-{indexRow}-{indexCol}</td>
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  )
}

export default HorizontalTable;
