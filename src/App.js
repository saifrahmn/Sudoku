import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  var sudokuArr = 
[
  [-1, 5, -1, 9, -1, -1, -1, -1, -1],
  [8, -1, -1, -1, 4, -1, 3, -1, 7],
  [-1, -1, -1, 2, 8, -1, 1, 9, -1],
  [5, 3, 8, 6, -1, 7, 9, 4, -1],
  [-1, 2, -1, 3, -1, 1, -1, -1, -1],
  [1, -1, 9, 8, -1, 4, 6, 2, 3],
  [9, -1, 7, 4, -1, -1, -1, -1, -1],
  [-1, 4, 5, -1, -1, -1, 2, -1, -1],
  [-1, -1, -1, -1, 3, -1, -1, 7, -1]
]
 

  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <table align='center'>
        <tbody>

          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
              return <tr key={rIndex}>

                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                  return <td key={rIndex + cIndex}>
                    <input value={sudokuArr[row][col] === -1 ? '' : sudokuArr[row][col] } className='inputsection' />
                  </td>
                })}
              </tr>
            })
          }
        </tbody>
      </table>
      <footer>
        these solver is a project made for educational purpose only, <a href ="clomen.web.app">know more about the developer</a>  
      </footer>
    </div>
  );
}

export default App;
