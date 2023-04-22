import React from 'react'
import {logo} from '../assets';
import MultiTextType from './autotext';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <img src={logo} alt="" style={{borderRadius:"50%",marginTop:"4px"} } className='object-contain'  />
          <MultiTextType/>
          <button type='button'
          onClick={()=>window.open('https://github.com/Kundanrahul')}
          className='black_btn'>GITHUB</button>
        </nav>
        <h1 className='head_text'>
          SUMMARIZE ARTICLES WITH <br/>
          <span className='shinny_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
          clear and concise summary for your lengthy articles
        </h2>
    </header>
  )
}

export default Hero