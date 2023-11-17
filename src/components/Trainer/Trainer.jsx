import Banner from "../Banner/Banner"
import '../Trainer/TrainerStyle.css'
import { useState, useEffect } from "react";

function Trainer() {

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
  return (
    <div className="blackBg">
        <Banner
        img='/assets/imgs/TrainerBanner.png'
        title='Personal Trainer'
        isMobile={isMobile}
        />
        <div className="personalTrainer">
            <p>We count with +30 certified personal trainers. Get in touch with one to get all the advice you need!</p>
            <img src="/assets/imgs/AvatarsTrainer.png" alt="" />
            <button><b>GET A PERSONAL TRAINER</b></button>
        </div>
        <div className="pricing flex-center">
            <div className="starterPack">
                <h2>STARTER PACK</h2>
                <span>All the utilities that an intermediate person may need</span>
                <div className="price">
                    <p>15$</p><span>/month</span>
                </div>
                <ul>
                    <li><img src="/assets/imgs/TickPricing.png" alt="" />Custom routine</li>
                    <li><img src="/assets/imgs/TickPricing.png" alt="" />Online Trainer</li>
                    <li><img src="/assets/imgs/TickPricing.png" alt="" />12-hour support</li>
                    <li><img src="/assets/imgs/TickPricing.png" alt="" />Exclusive gym discounts</li>
                </ul>
                <button>BUY PLAN</button>
            </div>
            <div className="intermediatePack">
                <div className="popular">
                    <h2>INTERMEIDATE PACK</h2><span>Most popular</span>
                </div>
                <span>All the utilities that an intermediate person may need</span>
                <div className="price">
                    <p>25$</p><span>/month</span>
                </div>
                <ul>
                    <li><img src="/assets/imgs/TickPricing.png" alt=""/> Custom routine</li>
                    <li><img src="/assets/imgs/TickPricing.png" alt=""/>Online Trainer</li>
                    <li><img src="/assets/imgs/TickPricing.png" alt=""/>12-hour support</li>
                    <li><img src="/assets/imgs/TickPricing.png" alt=""/>Exclusive gym discounts</li>
                    <li><img src="/assets/imgs/TickPricing.png" alt=""/>Exclusive gym discounts</li>
                    <li><img src="/assets/imgs/TickPricing.png" alt=""/>Exclusive gym discounts</li>
                </ul>
                <button>BUY PLAN</button>
            </div>
            <div className="advancedPack">
                <h2>ADVANCED PACK</h2>
                <span>All the utilities that an intermediate person may need</span>
                <div className="price">
                    <p>35$</p><span>/month</span>
                </div>
                <ul>
                    <li><img src="/assets/imgs/TickPricing.png" alt="" />Custom routine</li>
                    <li><img src="/assets/imgs/TickPricing.png" alt="" />Online Trainer</li>
                    <li><img src="/assets/imgs/TickPricing.png" alt="" />12-hour support</li>
                    <li><img src="/assets/imgs/TickPricing.png" alt="" />Exclusive gym discounts</li>
                    <li><img src="/assets/imgs/TickPricing.png" alt=""/>Exclusive gym discounts</li>
                    <li><img src="/assets/imgs/TickPricing.png" alt=""/>Exclusive gym discounts</li>
                </ul>
                <button>BUY PLAN</button>
            </div>
        </div>
        <div className='premiumService'>
            <h1>Premium Service</h1>
            <div className="imgPremium"><img src="/assets/imgs/ZoomTrainer.png" alt="" /></div>
            <p>With our premium membership you will get:</p>
            <ul>
                <li>A 24hs personal trainer. </li>
                <li>Zoom calls to solve any doubts and get corrections of exercises executions.</li>
                <li>More tips regarding nutrition and self development.</li>
            </ul>
            <div className='dumbellContainer'><img src="/assets/imgs/Dumbell.png" alt="" /></div>

        </div>
        
    </div>
  )
}

export default Trainer