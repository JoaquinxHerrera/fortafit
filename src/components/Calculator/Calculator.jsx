import Banner from "../Banner/Banner"
import '../Calculator/CalculatorStyle.css'
import RowRadioButtonsGroup from "../SexChoice/SexChoice"
import PieChartWithPaddingAngle from "../PieChart/PieChart"
import { useState, useEffect, useRef } from "react"

const Calculator = () => {
    const [calories, setCalories] = useState(2500);
    const [protein, setProtein] = useState(180);
    const [carbs, setCarbs] = useState(180);
    const [fat, setFat] = useState(180);
    const [age, setAge] = useState('25');
    const [height, setHeight] = useState('175');
    const [weight, setWeight] = useState('90');
    const [activityLevel, setActivityLevel] = useState('Sedentary');
    const [gender, setGender] = useState('male');
    const [dataForPieChartCut, setDataForPieChartCut] = useState([]);
    const [dataForPieChartMant, setDataForPieChartMant] = useState([]);
    const [dataForPieChartBulk, setDataForPieChartBulk] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const chartsContainerRef = useRef(null);
    const activityValue = {
        Sedentary: 1.2,
        Light: 1.375,
        Moderate: 1.55,
        VeryActive: 1.725,
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };
    
    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };
    
    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };
    
    const handleActivityLevelChange = (event) => {
        setActivityLevel(event.target.value);
    };
    
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    
    
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        handleResize(); // Para establecer el estado inicial
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const calculateMacros = (age, height, weight, activityLevel, gender) => {
        let tmb;
        if (gender === 'male') {
            tmb = 66.473 + 13.7516 * weight + 5.0033 * height - 6.7550 * age;
        } else if (gender === 'female') {
            tmb = 655.1 + 9.463 * weight + 1.8 * height - 4.6756 * age;
        } else {
            return;
        }
    
        const activityFactor = activityValue[activityLevel];
        const totalCalories = tmb * activityFactor;
    

        const cutProteinCalories = parseInt(weight * 2.5 * 4);
        const cutFatCalories = parseInt(weight * 0.8 * 9);
        const cutCarbCalories = parseInt((totalCalories-500) - cutProteinCalories - cutFatCalories);
    
        const maintenanceProteinCalories = parseInt(totalCalories*0.4);
        const maintenanceFatCalories = parseInt(totalCalories * 0.3);
        const maintenanceCarbCalories = parseInt(totalCalories *0.3);
    
        const bulkProteinCalories = parseInt(weight * 2 * 4);
        const bulkFatCalories = parseInt(weight * 1 * 9);
        const bulkCarbCalories = parseInt((totalCalories+500) - bulkProteinCalories - bulkFatCalories);
    
        const dataForPieChartCut = [
            { label: 'Protein', value: parseInt(cutProteinCalories)/4, color: 'rgba(30, 30, 30, 1)' }, 
            { label: 'Fat', value: parseInt(cutFatCalories)/9, color: 'rgba(250, 255, 0, 1)' },
            { label: 'Carbs', value: parseInt(cutCarbCalories)/4, color: 'rgba(255, 199, 0, 1)' },
        ];
    
        const dataForPieChartMant = [
            { label: 'Protein', value: parseInt(maintenanceProteinCalories)/4, color: 'rgba(30, 30, 30, 1' }, 
            { label: 'Fat', value: parseInt(maintenanceFatCalories)/9, color: 'rgba(250, 255, 0, 1)' },
            { label: 'Carbs', value: parseInt(maintenanceCarbCalories)/4, color: 'rgba(255, 199, 0, 1)' },
        ];
    
        const dataForPieChartBulk = [
            { label: 'Protein', value: parseInt(bulkProteinCalories)/4, color: 'rgba(30, 30, 30, 1)' }, 
            { label: 'Fat', value: parseInt(bulkFatCalories)/9, color: 'rgba(250, 255, 0, 1)' },
            { label: 'Carbs', value: parseInt(bulkCarbCalories)/4, color: 'rgba(255, 199, 0, 1)' },
        ];

       

        // Actualizar los estados con los datos para los gráficos de pastel
        setDataForPieChartCut([...dataForPieChartCut]);
        setDataForPieChartMant([...dataForPieChartMant]);
        setDataForPieChartBulk([...dataForPieChartBulk]);
    
        // ... Otras actualizaciones de estado si es necesario
        setCalories(totalCalories);
        setProtein(maintenanceProteinCalories / 4);
        setCarbs(maintenanceCarbCalories / 4);
        setFat(maintenanceFatCalories / 9);

        if (chartsContainerRef.current) {
            chartsContainerRef.current.scrollIntoView({ behavior: 'smooth', block:'start' });
        }
    };
    

  return (
    <div>
        <Banner
        className='banner'
        img='/assets/imgs/CalculatorBanner.png'
        title='Macro Calculator'
        isMobile={isMobile}
        />
        <div className="calculatorBody">
            <p className="noMobile">Calculate your required macros intake depending on your goal and create your own diet. With this you will have the possibility to do a flex diet and avoid cutting those foods you love!</p>
            <div className="calcu flex">
                <div className="calcuLeft">
                    <div className="age">
                        <label htmlFor="Age">AGE</label>
                        <div>
                            <input type="number" name="age" placeholder="Years" value={age} onInput={(e) => (e.target.value = e.target.value.replace(/\D/, ''))} onChange={handleAgeChange}/>
                        </div>
                    </div>
                    <div className="gender">
                        <RowRadioButtonsGroup gender={gender} onGenderChange={handleGenderChange}/>
                    </div>
                    <div className="age">
                        <label htmlFor="height">HEIGHT</label>
                        <div>
                            <input type="number" name="height" placeholder="Cm" onInput={(e) => (e.target.value = e.target.value.replace(/\D/, ''))} value={height} onChange={handleHeightChange}/>
                        </div>
                    </div>
                    <div className="age">
                        <label htmlFor="wheight">WEIGHT</label>
                        <div>
                            <input type="number" name="weight" placeholder="Kg" onInput={(e) => (e.target.value = e.target.value.replace(/\D/, ''))} value={weight} onChange={handleWeightChange}/>
                        </div>
                    </div>
                    <div className="activityLevel">
                        <label htmlFor="wheight">ACTIVITY LEVEL</label>
                        <div>
                            <select name="activity level" onChange={handleActivityLevelChange} value={activityLevel}>
                                <option value="Sedentary">Sedentary (Little or no exercise)</option>
                                <option value="Light">Light (exercise 1-3 days a week)</option>
                                <option value="Moderate">Moderate (exercise 4-5 days a week)</option>
                                <option value="VeryActive">Very active (exercise 6-7 days a week)</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button className="calcuBtn center-vert" onClick={() => calculateMacros(age, height, weight, activityLevel, gender)}>Calculate
                        <img src="/assets/imgs/CalcuBtn.png" alt="" />
                        </button>
                    </div>
                </div>
                <div className="calcuRight">
                    <img  src="/assets/imgs/CalcuImgRight.png" alt="" />
                </div>
            </div>
            <div className="goals"ref={chartsContainerRef}>
                <h1>goals:</h1>
                <div className="leyenda flex-center ">
                    <div className="center-vert">
                        <img src="/assets/imgs/CarbDot.png" alt="" />
                        <span>Carbohidrates</span>
                    </div>
                    <div className="center-vert">
                        <img src="/assets/imgs/ProtDot.png" alt="" />
                        <span>Protein</span>
                    </div>
                    <div className="center-vert">
                        <img src="/assets/imgs/FatDot.png" alt="" />
                        <span>Fat</span>
                    </div>
                </div>
                <div className="charts flex-center" >
                    <PieChartWithPaddingAngle title='CUT' data={dataForPieChartCut} calories={parseInt(calories-500).toString()} protein={parseInt(calories*0.36/4).toString()} carbs={parseInt(calories*0.39/4).toString()} fat={parseInt(calories*0.26/9).toString()}/>
                    <svg className='noMobile' width="30" height="300" viewBox="0 0 4 522" fill="none">
                        <path d="M2 2L1.99998 520" stroke="#585858" strokeWidth="5"/>
                    </svg>
                    <PieChartWithPaddingAngle title='MANTAINANCE' data={dataForPieChartMant} calories={parseInt(calories).toString()} protein={parseInt(protein).toString()} carbs={parseInt(carbs).toString()} fat={parseInt(fat).toString()}/>
                    <svg className='noMobile' width="30" height="300" viewBox="0 0 4 522" fill="none">
                        <path d="M2 2L1.99998 520" stroke="#585858" strokeWidth="5"/>
                    </svg>
                    <PieChartWithPaddingAngle title='BULK' data={dataForPieChartBulk} calories={parseInt(calories+500).toString()} protein={parseInt(calories*0.21/4).toString()} carbs={parseInt(calories*0.2/4).toString()} fat={parseInt(calories*0.5/9).toString()}/>
                </div>           
            </div>
        </div>
        <div className="black flex-center">
            <img className='calcuDot' src="/assets/imgs/CalcuDot.png" alt="" />
        </div>

        

    </div>
  )
}

export default Calculator