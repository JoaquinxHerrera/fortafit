import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';
import PropTypes from 'prop-types';
import '../Calculator/CalculatorStyle.css'



export default function PieChartWithPaddingAngle({title, data, calories, protein, carbs, fat}) {
    PieChartWithPaddingAngle.propTypes = { 
        title: PropTypes.string.isRequired,
        data : PropTypes.array.isRequired,
        calories : PropTypes.string.isRequired,
        protein : PropTypes.string.isRequired,
        carbs : PropTypes.string.isRequired,
        fat : PropTypes.string.isRequired,
    };
  return (
    <>
    
    <div >
        <p className='flex-center'>{title}</p>
        <Stack direction="column">
            
        <PieChart
            series={[
            {
                paddingAngle: 5,
                innerRadius: 80,
                outerRadius: 120,
                data: data,
            },
            ]}
            margin={{ right: 5 }}
            width={300}
            height={300}
            legend={{ hidden: true }}
            
        />
        <span className='flex-center'><b>{calories}Kcals</b></span>
        <div className='flex macro'>
            <div className='goalsLeft flex-center'><span >Protein</span></div>
            <img src="/assets/imgs/Arrow 1.png" alt="" />
            <span className='goalsRight flex-center'>{protein} gr/day</span>
        </div>
        <div className='flex macro'>
            <div className='goalsLeft flex-center'><span >Carbs</span></div>
            <img src="/assets/imgs/Arrow 1.png" alt="" />
            <span className='goalsRight flex-center'>{carbs} gr/day</span>
        </div>
        <div className='flex macro'>
            <div className='goalsLeft flex-center'><span >Fat</span></div>
            <img src="/assets/imgs/Arrow 1.png" alt="" />
            <span className='goalsRight flex-center'>{fat} gr/day</span>
        </div>
        
        </Stack>
    </div> 
        
    </>
  );
}