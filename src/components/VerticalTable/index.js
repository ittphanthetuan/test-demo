import React from 'react';
import Wrapper from './Wrapper';

function VerticalTable(props) {
  const { rows = 50, cols = 3, className } = props
  const arrRows = new Array(rows).fill(null);
  const arrCols = new Array(cols).fill(null);
  return (
    <Wrapper className={`${className} contain-table`}>
      <h1>VerticalTable</h1>
      <div className='table'>
        <table>
          <thead>
            <tr>
              {arrCols.map((itemCol, indexCol) => {
                const keyId = `vertical-th-${indexCol}`;
                return <th key={keyId} id={keyId}>header {indexCol}</th>
              })}
            </tr>
          </thead>

          <tbody>
            {arrRows.map((itemRow, indexRow) => (
              <tr key={`row-${indexRow}`}>
                {arrCols.map((itemCol, indexCol) => {
                  const keyId = `vertical-td-${indexRow}-${indexCol}`;
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

export default VerticalTable;
