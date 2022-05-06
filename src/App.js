
import './App.css';
import React from "react";
import FirstRowList from './FirstRowList';
import SecondRowList from './SecondRowList';
import DescList from './DescList';

function App() {

  const numbers = [];
  for(var i=0;i<=100;i++){
    numbers.push(i.toString());
  }
    
  return (
    <div>
      <div id="title">
        <h1>FizzBuzz</h1>
      </div>
      <div className="div">
        <table id="myTable">
          <tbody>
            <tr id="firstRow">
              <FirstRowList numbers={numbers}/>
            </tr>
          </tbody>
          <tbody>
            <tr id="desc">
                <DescList numbers={numbers}/>
            </tr>
          </tbody>
          <tbody>
            <tr id="secondRow">
              <SecondRowList numbers={numbers}/>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  
}

export default App;
