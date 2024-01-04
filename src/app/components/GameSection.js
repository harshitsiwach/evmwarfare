"use client"
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import { VscArrowCircleLeft, VscArrowCircleRight } from 'react-icons/vsc';

function GameSection() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/images/homepage/1.png", "/images/homepage/2.png", "/images/homepage/3.png", "/images/homepage/4.png", "/images/homepage/5.png", "/images/homepage/6.png"]; // Add more image paths as needed
  const descriptions = [
    "The AR-15, a versatile and powerful assault rifle, is known for its accuracy and adaptability on the battlefield.",
    "The 12-gauge shotgun, a close-quarters powerhouse, delivers devastating firepower at short range.",
    "The 9mm pistol, a classic sidearm, offers reliability and precision for tactical versatility."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
  
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (event.key === 'ArrowRight') {
        handleNextImage();
      }

      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 8000); // Change image every 5 seconds
  
      return () => clearInterval(interval);
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentImageIndex]);


  return (
    <div className='bg-slate-200 font-lemon-milk pt-8 text-black'>
      <div className='grid md:grid-cols-2 gap-12 border-1 rounded-md border-inherit pt-14'>
        <div className='p-4'>
          <h1 className='text-center md:text-left md:mt-4 md:ml-20 md:mr-20 leading-10	'>
            Immerse yourself in the pulsating universe of "Shardscape," a meticulously crafted 3rd person shooter powered by Unreal Engine 5. Far beyond the ordinary, this isn't just a game; it's a groundbreaking blockchain odyssey set in the dynamic realm of the 3rd Web. Shardscape breaks free from the confines of a single chain – it's a multichain marvel, seamlessly compatible with the Ethereum Virtual Machine (EVM). Our mastery in Unreal Engine 5 and Unity ensures a feast for your senses with unparalleled visuals, smooth animations, and dynamic gameplay.
          </h1>
        </div>

        <div className='md:mt-0 mt-6 md:mr-12'>
        <div className='image-container '>
         {/* Use the currentImageIndex for the dynamic image source */}
         {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            width={500}
            height={500}
            alt="Game Screenshot"
            className={`transition-image image ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
        
        </div>
        <div className="navigation-bars">
        {images.map((_, index) => (
          <div
            key={index}
            className={`navigation-bar ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>
          
    
        </div>
        
      </div>
    </div>
  );
}

export default GameSection;
