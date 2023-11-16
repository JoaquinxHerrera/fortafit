import ActionAreaCard from '../Card/Card'
import { NavLink } from 'react-router-dom'
import '../HomeBody/HomeBodyStyle.css'
import CarouselRatio from '../Mobile Carousel/CarouselRatio'


function HomeBody() {
    const myCarouselItems = [
        {
            src: 'src/assets/imgs/Card1.png',
            title: 'MACRO CALCULATOR',
        },
        {
            src: 'src/assets/imgs/Card2.png',
            title: 'ROUTINE',
        },
        {
            src: 'src/assets/imgs/Card3.png',
            title: 'TRAINER',
        },
        {
            src: 'src/assets/imgs/Card4.png',
            title: 'DISCOUNTS',
        },
    ]
  return (
    <div className='homeBody'>
        <h2>With FORTAFIT WE OFFER YOU THE BEST WAY TO ACHIEVE YOUR DREAM BODY. <span>YOU WILL GET A NUTRITION PLAN AND THE ROUTINE THAT BEST ADAPTS TO YOUR PROFILE.</span></h2>
        <div className='dumbellContainer'><img src="src/assets/imgs/Dumbell.png" alt="" /></div>
        <div className='trainers'>
            <p>We count with more than 30 certified personal trainers that will follow you along your journey, giving you the best advises and support to help you achieve your goals!</p>
            <img src="src/assets/imgs/Trainers.png" alt="" />
        </div>
        <div className='cards'>
            <ActionAreaCard
            img='src/assets/imgs/Card1.png'
            title='MACRO CALCULATOR'
            />
            <ActionAreaCard
            img='src/assets/imgs/Card2.png'
            title='ROUTINE'
            />
            <ActionAreaCard
            img='src/assets/imgs/Card3.png'
            title='TRAINER'
            />
            <ActionAreaCard
            img='src/assets/imgs/Card4.png'
            title='DISCOUNTS'
            />
        </div>
        <div className='carousel'>
            <CarouselRatio items={myCarouselItems}/>
        </div>
        <div className='flex-center'>
            <img className='motivationImg'src="src/assets/imgs/Motivational.png" alt="" />  
        </div>

        <div className='flex-center'><img className='line' src="src/assets/imgs/Line.png" alt="" /></div>
        <div className='flex-center homeBtn'>
            <img className='dots' src="src/assets/imgs/DotsLeft.png" alt="" />
            
            <NavLink className='startJourney' to="/contact">Start your journey today!</NavLink>
            
            <img className='dots' src="src/assets/imgs/DotsRight.png" alt="" />
        </div>
        <div className='flex-center homeEnd'><img className='line' src="src/assets/imgs/Line.png" alt="" /></div>
    </div>
  )
}

export default HomeBody