import React from 'react'
import './Home.css'

const Home = () => {
  return(
  <>
  <h1 className='title'>Home page</h1>
  
   <button className='btn btn-primary' > Hello</button>
  
  </>
  )
}

const Hello =() => {
    return <h1 className='title'>Hello</h1>;
}

export {Home, Hello}