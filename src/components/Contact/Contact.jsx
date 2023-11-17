import Banner from "../Banner/Banner"
import '../Contact/ContactStyle.css'
import GoogleMap from "./Map"
import { useState, useEffect } from "react";

function Contact() {
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
    <div>
        <Banner
        img='/assets/imgs/routineBanner.png'
        title="Contact Us"
        isMobile={isMobile}
        />
        <div className="blackBg">
            <div className="blackBg contact">
                <div className="leftContact">
                    <h1>We are here to help you get your deam body!</h1>
                    <p>At Fortafit, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
                    <div className="flex info">
                        <div className="flex firstLine">
                            <div>
                                <h2>Los Angeles, USA</h2>
                                <img className="contactLine"src="/assets/imgs/LineContact.png" alt="" />
                                <p>12 Golds gym street,</p>
                                <p>  Shwartz, 3301, USA</p>
                            </div>
                            <div>
                                <h2>Opening hours</h2>
                                <img className="contactLine" src="/assets/imgs/LineContact.png" alt="" />
                                <p>Mon to Fri: 7:30 am — 1:00 am</p>
                                <p>Mon to Fri: 7:30 am — 1:00 am</p>
                            </div>
                        </div>
                        <div className="flex secondLine">
                            <div>
                                <h2>Information</h2>
                                <img className="contactLine" src="/assets/imgs/LineContact.png" alt="" />
                                <p>+332-312-1231</p>
                                <p>fortafit@gymail.com</p>
                            </div>
                            <div>
                                <h2>Follow Us On</h2>
                                <img className="contactLine" src="/assets/imgs/LineContact.png" alt="" />
                                <div className="contactIcons">
                                    <img src="/assets/imgs/InstagramContact.png" alt="" />
                                    <img src="/assets/imgs/YoutubeContact.png" alt="" />
                                    <img src="/assets/imgs/FacebookContact.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="rightContact">
                    <h1>Leave us your info</h1>
                    <input type="text" placeholder="Full Name*"/>
                    <input type="text" placeholder="Email Address*"/>
                    <select name="ClassSelector" placeholder="Select a class">
                        <option value="" disabled  hidden>Select a class</option>
                        <option value="opcion1">Opción 1</option>
                        <option value="opcion2">Opción 2</option>
                        <option value="opcion3">Opción 3</option>
                    </select>
                    <input className='comments' type="text" placeholder="Leave a comment..."/>
                    <div className="flex-center">
                        <button className="contactBtn">Submit now</button>
                    </div>
                    
                </div>
            </div>
            
            <div className='mapContact'>
                <GoogleMap ></GoogleMap>
            </div>
            
        </div>
    </div>
  )
}

export default Contact