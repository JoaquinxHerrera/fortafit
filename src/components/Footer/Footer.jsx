import '../Footer/FooterStyle.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer flex'>
        <NavLink><img className='iconFooter' src="/assets/imgs/IconFooter.png" alt="Logo" /></NavLink>
        <ul className='flex bottomIcons'>
            <li><NavLink><img src="/assets/imgs/InstagramIcon.png" alt="" /></NavLink></li>
            <li><NavLink><img src="/assets/imgs/YoutubeIcon.png" alt="" /></NavLink></li>
            <li><NavLink><img src="/assets/imgs/FacebookIcon.png" alt="" /></NavLink></li>
            <li><NavLink><img src="/assets/imgs/WhatsappIcon.png" alt="" /></NavLink></li>
        </ul>
    </div>
  )
}

export default Footer