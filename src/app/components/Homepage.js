import React from 'react'
import { Shiba } from "./Shiba";
import Poweredby from './Poweredby';
import GameSection from './GameSection';
import GameInfo from './GameInfo';
import Image from 'next/image';
import Header from "./Header";
import SUpportedChains from './SupportedChains';


function Homepage() {
   
  return (

    
    <main>
      
       <div className="bg-slate-300 w-full h-20">
        <Header />
        </div>
        <div className='h-auto ' >
            <GameSection/>
        </div>
        <div className='h-auto'>
           <Shiba />
        </div>
        <div className='pt-2 '>
             <SUpportedChains />
        </div>
        <div className='h-[780px]  pt-12' >
            <GameInfo/>
        </div>
        <div className='pt-2 '>
             <Poweredby />
        </div>
        
      <div className="flex justify-center mt-4">
        <video width="480" height="480" autoPlay loop muted className="rounded-lg video-center">
          <source src="/videos/team.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

        <div>
        <a href="https://privacy.evmwarfare.com" target="_blank" rel="noopener noreferrer" 
        className="border-2 border-gray-300 hover:border-gray-700 text-gray-400 hover:text-gray-700 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out bg-transparent font-lemon-milk">
            Privacy Policy
        </a>
        </div>
        
       
    </main>
  )
}

export default Homepage