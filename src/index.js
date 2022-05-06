import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><React.StrictMode>
    <App />
  </React.StrictMode><script>
      var table = document.getElementById("myTable");
      table.style.border = 0;
      var firstRow = document.getElementById("firstRow");
      var secondRow = document.getElementById("secondRow");
      //var row = table.insertRow(table.length);

      var cell1 = firstRow.insertCell(firstRow.length);
      var cell2 = secondRow.insertCell(secondRow.length);
      cell1.innerHTML = "1";
      cell2.innerHTML = "fizzbuzz";
      
    </script></>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
