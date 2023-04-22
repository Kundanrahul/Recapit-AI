import React from 'react'
import MultiTextType from './components/autotext';

import './App.css';

import Hero from './components/Hero';
import Demo from './components/Demo';

const App = () => {
  return (
    <main>
        <div className='main'>
            <div className='gradient'></div>
        </div>
        <div className='app'>
            {/* <MultiTextType/> */}
            <Hero/>
            <Demo/>
        </div>
    </main>
  )
}

export default App