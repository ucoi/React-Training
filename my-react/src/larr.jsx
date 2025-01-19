import { useState } from "react";
function Larr(){
    const [Cars , setCars] = useState([])
    const [carYear , setcarYear] = useState(new Date().getFullYear())
    const [carMake , setcarMake] = useState('')
    const [carModel , setcarModel] = useState('')

    function addcar(){
        const newCar = {year : carYear ,
                        model : carModel ,
                        make : carMake
         }

         setCars(c => [...c , newCar])
         setcarYear((new Date().getFullYear()))
         setcarMake('')
         setcarModel('')
    }
    function removecar(index){
        setCars(c =>  c.filter((_,i ) => i !== index))
    }
    function handleyear(e){
        setcarYear(e.target.value)
    }
    function handlemake(e){
        setcarMake(e.target.value)
    }
    function handlemodel(e){
        setcarModel(e.target.value)

    }


    return (
        <>
            <div>
                <h2>List Of Car Objects</h2>
                <ul>
                    {Cars.map((car, index) => (
                        <li key={index} onClick={() => removecar(index)}> 
                            {car.year + ' '}
                            {car.make + ' '}
                            {car.model + ' '}
                        </li>
                    ))}
                </ul>

                <input
                    type="number"
                    value={carYear}
                    onChange={handleyear}
                    placeholder="Enter car year"
                />
                <br />
                <input
                    type="text"
                    value={carMake}
                    onChange={handlemake}
                    placeholder="Enter car make"
                />
                <br />
                <input
                    type="text"
                    value={carModel}
                    onChange={handlemodel}
                    placeholder="Enter car model"
                />
                <br />
                <button onClick={addcar}>Add Car</button>
            </div>
        </>
    );

}
export default Larr