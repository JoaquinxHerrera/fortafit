import { useState, useEffect } from 'react';
import Schedule from './Schedule';
import Banner from '../Banner/Banner';
import '../Schedule/ScheduleStyle.css'

const FilterComponent = () => {
  const [selectedDay, setSelectedDay] = useState('Monday'); 

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
    <div className="filter">
        <Banner
        img='src/assets/imgs/ScheduleBanner.png'
        title='Schedule by Day'
        isMobile={isMobile}
        />
        <div className='daysContainer' >
          {daysOfWeek.map(day => (
          <button 
          key={day} 
          className={`daysCal ${selectedDay === day ? 'selected' : ''}`}
          onClick={() => setSelectedDay(day)}>
            {day}
          </button>
          ))}
        </div>
        <Schedule dayOfWeek={selectedDay} />
    </div>
  );
};

export default FilterComponent;
