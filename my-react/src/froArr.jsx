import { useState } from "react";
function Farr() {
    const [foods , setfoods] = useState([
        'apple' , 'orange' , 'banana'
    ])

    function additem(){
        const newfood = document.getElementById('food').value ;

        setfoods( f => [...foods , newfood])
        document.getElementById('food').value = ''
    }

    function removeitem(index){
        setfoods(foods.filter((_,i) => i !== index));
    }


    return(
        <>
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food , index) => 
                <li key={index} onClick={() => removeitem(index)} >
                {food}
                </li>)}
            </ul>

            <input type="text" id="food" placeholder="Enter Food Name" />
            <button onClick={additem}>Add Food</button>
        </div>
        </>
    );
}

export default Farr