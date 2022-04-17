import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Hello, Home } from './Home'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hello" element={<Hello />} />
        </Routes>
        
        
    </div>
  )
}

export default App