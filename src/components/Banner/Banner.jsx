import PropTypes from 'prop-types';
import '../Banner/BannerStyle.css';
import classnames from 'classnames';

function Banner({title, img, isMobile}) {
  const bannerStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: isMobile? '50vh' : '62vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile? 'center' : 'start',
    color: 'white',
    fontSize: '4rem', 
    fontFamily: 'Bebas Neue',
    paddingLeft: isMobile? '0' : '8vw',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  };
  const bannerClassName = classnames('banner', { 'mobile-banner': isMobile });
  
  return (
    <div className={bannerClassName} style={bannerStyle}>
        {title}
    </div>
  )
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isMobile: PropTypes.bool.isRequired,
};

export default Banner