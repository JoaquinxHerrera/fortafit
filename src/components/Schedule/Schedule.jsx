import PropTypes from 'prop-types';
import './ScheduleStyle.css'
import { NavLink } from 'react-router-dom';

const Schedule = ({ dayOfWeek }) => {
    const classesData = [
      { className: 'Full Body', time: '9:00am - 10:00am', trainer: 'David Laid', dayOfWeek: 'Monday' },
      { className: 'Aerobic', time: '10:00am - 11:00am', trainer: 'Shara Pova', dayOfWeek: 'Monday' },
      { className: 'Body Building', time: '2:00pm - 3:00pm', trainer: 'Christian Bum', dayOfWeek: 'Monday' },
      { className: 'Cycling', time: '6:00pm - 7:00pm', trainer: 'John B. Ycicle', dayOfWeek: 'Monday' },
      { className: 'Boxing', time: '9:00am - 10:00am', trainer: 'Muhammad Ali', dayOfWeek: 'Tuesday' },
      { className: 'Yoga', time: '2:00pm - 3:00pm', trainer: 'Lana R.', dayOfWeek: 'Tuesday' },
      { className: 'Crossfit', time: '4:00pm - 5:00pm', trainer: 'Rich Froning', dayOfWeek: 'Tuesday' },
      { className: 'Power Lifting', time: '6:00pm - 7:00pm', trainer: 'Larry Wheels', dayOfWeek: 'Tuesday' },
      { className: 'Karate', time: '9:00am - 10:00am', trainer: 'Mister Miyagi', dayOfWeek: 'Wednesday' },
      { className: 'Running', time: '11:00am - 12:00pm', trainer: 'Usain Bolt', dayOfWeek: 'Wednesday' },
      { className: 'Body Building', time: '2:00pm - 3:00pm', trainer: 'Arnold Shwartz', dayOfWeek: 'Wednesday' },
      { className: 'Zumba', time: '9:00am - 10:00am', trainer: 'Dance Master', dayOfWeek: 'Thursday' },
      { className: 'Pilates', time: '1:00pm - 2:00pm', trainer: 'Pilates Pro', dayOfWeek: 'Thursday' },
      { className: 'Functional Training', time: '4:00pm - 5:00pm', trainer: 'Fit Guru', dayOfWeek: 'Thursday' },
      { className: 'Gymnastics', time: '6:00pm - 7:00pm', trainer: 'Flexible Felix', dayOfWeek: 'Thursday' },
      { className: 'Spinning', time: '10:00am - 11:00am', trainer: 'Spin Master', dayOfWeek: 'Friday' },
      { className: 'Boot Camp', time: '1:00pm - 2:00pm', trainer: 'Sergeant Sweat', dayOfWeek: 'Friday' },
      { className: 'Pump', time: '4:00pm - 5:00pm', trainer: 'Pump Pro', dayOfWeek: 'Friday' },
      { className: 'Martial Arts', time: '6:00pm - 7:00pm', trainer: 'Sensei', dayOfWeek: 'Friday' },
      { className: 'Swimming', time: '10:00am - 11:00am', trainer: 'Aquaman', dayOfWeek: 'Saturday' },
      { className: 'Circuit Training', time: '1:00pm - 2:00pm', trainer: 'Circuit King', dayOfWeek: 'Saturday' },
      { className: 'Balance and Flexibility', time: '4:00pm - 5:00pm', trainer: 'Flex Master', dayOfWeek: 'Saturday' },
      { className: 'Zumba', time: '6:00pm - 7:00pm', trainer: 'Dance Diva', dayOfWeek: 'Saturday' }
    ];
  
    const filteredClasses = classesData.filter(classItem => classItem.dayOfWeek === dayOfWeek);
    Schedule.propTypes = {
      dayOfWeek: PropTypes.string.isRequired,
    };

  return (
    <div className="calendar">
      <div className='flex-center'>
        <table className='calendarTable'>
          <tbody>
            {filteredClasses.map((classItem, index) => (
              <tr key={index}>
                <div className='scheduleRow'>
                  <div className='columnCal'>
                    <span className='headerCal'>Class</span>
                    <td className='textCal'>{classItem.className}</td>
                  </div>
                  <div className='columnCal'> 
                    <span className='headerCal'>Time</span>
                    <td className='textCal'>{classItem.time}</td>
                  </div>
                  <div className='columnCal'>
                    <span className='headerCal'>Trainer</span>
                    <td className='textCal'>{classItem.trainer}</td>
                  </div>
                  <NavLink to='/contact' className='joinNow'>Join Now</NavLink>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Schedule;
