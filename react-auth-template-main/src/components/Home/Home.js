import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div className='Home'>
      <p className='paragrah1'>
              This is the Home Page.
        <br/>
              Click on the button below.
      </p>
      <Link to="/Lessons"><button className='LearnMore'>
              Learn More
      </button>
      </Link>
    </div>
  )
}

export default Home
