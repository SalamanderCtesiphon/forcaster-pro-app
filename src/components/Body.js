import React, { useState } from 'react'


function Body() {


  return (
    <div className='body'>
      <form className='search-form'>
        <h3>Seach City or Zip Code:  </h3>
        <input id='input'></input>
        <button id='search-btn'>submit</button>
      </form>
      <div className='display'>
        Hi
      </div>
    </div>
  )
}

export default Body