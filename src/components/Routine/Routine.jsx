import Banner from '../Banner/Banner'
import ActionAreaCard from '../Card/Card'
import '../Routine/RoutineStyle.css'
import { useState, useEffect } from 'react';
import CarouselRatio from '../Mobile Carousel/CarouselRatio';

function Routine() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        handleResize(); 
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const myCarouselItemsRoutine = [
        {
            src: '/assets/imgs/Caroussel1.png',
            title: 'FULL BODY',
        },
        {
            src: '/assets/imgs/Caroussel2.png',
            title: 'PUSH-PULL-LEGS',
        },
        {
            src: '/assets/imgs/Caroussel3.png',
            title: '5 DAYS',
        },
        {
            src: '/assets/imgs/Caroussel4.png',
            title: 'RUNNING',
        },
    ]

  return (
    <div className='homeBody'>
        <Banner
        img="/assets/imgs/routineBanner.png"
        title="Get your routine"
        isMobile={isMobile}
        />
        <h3>Pick a routine that best adapts to you</h3>
        <div className='mobile'>
            <CarouselRatio items={myCarouselItemsRoutine}/>
        </div>
        
        <div className='cards'>
            <ActionAreaCard
            img='/assets/imgs/Caroussel1.png'
            title='Full body'
            />
            <ActionAreaCard
            img='/assets/imgs/Caroussel2.png'
            title='PUSH-PULL-LEGS'
            />
            <ActionAreaCard
            img='/assets/imgs/Caroussel3.png'
            title='5 DAYS'
            />
            <ActionAreaCard
            img='/assets/imgs/Caroussel4.png'
            title='RUNNING'
            />
        </div>
        <div className='exercises'>
            <h1>Exercises</h1>
            <div className='exercisesBanner'>
                <div className='chest'>
                    <h1>Chest</h1>
                </div>          
                <div className='back'>
                    <h1>Back</h1>
                </div>
            </div>
            <div className='exercisesBanner'>
                <div className='legs'>
                    <h1>Legs</h1>
                </div>
                <div className='arms'>
                    <h1>Arms</h1>
                </div>
            </div>
            <div className='flex-center center-vert'>
                <img className='dotsExer noMobile' src="/assets/imgs/DotsLeft.png" alt="" />
                <div className='shoulders'>
                    <h1>Shoulders</h1>
                </div>
                <img className='dotsExer noMobile' src="/assets/imgs/DotsRight.png" alt="" />
            </div>
        </div>
        <div className='flexColumn mobile getTrainer'>   
            <img className='line'src="/assets/imgs/Line.png" alt="" />
            <div className=' flex-center center-vert'>
                   <img className='dot'src="/assets/imgs/YellowDot.png" alt="" /><h1>Get your personal trainer</h1><img className='dot' src="/assets/imgs/YellowDot.png" alt="" />
            </div>
            <img className='line' src="/assets/imgs/Line.png" alt="" />  
        </div>

    </div>
  )
}

export default Routine