import '../Hero/HeroStyles.css'
import HomeBody from '../HomeBody/HomeBody'

function Hero() {
  return (
    <>
      <div className='hero'>
        
        <h1>Be the best version of yourself.</h1>
        <img className='scrollArrow'src="/assets/imgs/ScrollMobile.png" alt="" />
      </div>
      <>
      <HomeBody></HomeBody>
      </>
    </>
    
  )
  
}

export default Hero