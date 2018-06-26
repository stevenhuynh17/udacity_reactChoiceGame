import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  function test(e) {
    console.log("BUTTON CLICKED")
  }

  return (
    <div>
      <h1>Sorry, the page you're looking for doesn't exist.</h1>
      <h3>
        <span>
          <Link to='/'>
            <button className='btn' onClick={test}>Click Here</button>
          </Link>
        </span> to go back to the home page.
      </h3>

    </div>
  )
}
