import React from 'react'
import Counter from './Counter'
import './App.css'

function App({name}) {
  

  return (
    <>
      <div id='app'>
      <Counter name="Orange" />
      <Counter name="Mango"/>
      <Counter name="Apple"/>
      </div>
    </>
  )
}

export default App
