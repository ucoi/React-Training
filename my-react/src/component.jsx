import React , {useState} from "react"
function CarComponent(){
    const [car , setcar] = useState(
        {   year : '' ,
            make: '',
            model:''
        })

        function handlemodelchange(e){
            setcar( c => ({...car , model : e.target.value}))

        }
        function handleyearchange(e){
            setcar( c => ({...car , year : e.target.value}))
        }
        function handlemakechange(e){
            setcar( c => ({...car , make : e.target.value}))
            
        }

    return (
        <>
        <div className="">
            <p>Your Favorite Car is :  {car.year} {car.make} {car.model}</p>

            <input 
                type="number" 
                value={car.year} 
                onChange={handleyearchange}/>
            <br />
            <input 
               type="text" 
               value={car.make} 
               onChange={handlemakechange}/> 
            <br />
            <input 
                type="text" 
                value={car.model}
                onChange={handlemodelchange}/>


        </div>
        </>
    )

}

export default CarComponent