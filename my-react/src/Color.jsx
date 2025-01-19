import React , {useState} from "react"

function Color() {

    const [color , setcolor] = useState('white')

    function handlecolor (e){
        setcolor(e.target.value)
    }




    return (
        <>
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor : color}}>
                <p>Selected Color : {color}</p>
            </div>
            <label>Select a Color</label>
            <br />
             <input type="color" value={color}  onChange={handlecolor}/>
        </div>
        
        </>
    )
}

export default Color