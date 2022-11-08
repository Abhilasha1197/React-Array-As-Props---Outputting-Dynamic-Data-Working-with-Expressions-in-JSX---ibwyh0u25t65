import React from 'react'
import '../styles/App.css';
const arr = JSON.parse(window.localStorage.getItem('props') || `["hello","world"]`) // do not change
const Join = (props) =>{

  return(
    <div id ="join">
      {/* Access prop 'words' and print it using .join like words.join(',')*/}
      {props.words.Join(',')}
    </div>
  )
}
const App = () => {
     var words = ['ghj','fgh','dfg']
  return (
    <div id="main">
      <Join arr={words} />
    </div>
  )
}


export default App;
