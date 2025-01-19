import React , {useState} from "react"
import { use } from "react";
function MyComponent() {
    const [name , setName] = useState('Guest') ; 
    const [Quantity , setQunatity] = useState()
    const [comment , setcomment] = useState('')
    const [payment , setpayment] = useState('')
    const [shipping , setshipping] = useState('a7a')



    function handleshipping(e){
        setshipping(e.target.value)
    }
    function handlepayment(e){
        setpayment(e.target.value)
    }
    function handlecommetnchange(e){
        setcomment(e.target.value)
    }
    function handleName (e) {
        setName(e.target.value)
    }
    function handleQuantityChange(e){
        setQunatity(e.target.value)
    }

    return(
        <>
        <div>
            <input type="text" value={name} onChange={handleName} />
            <p>Name : {name}</p>

            <input type="number" value={Quantity} onChange={handleQuantityChange} />
            <p>qunantity : {Quantity} </p>

            <textarea placeholder="Enter Some Comments" value={comment} onChange={handlecommetnchange}></textarea>
            <p>Comment : {comment}</p>
            <br />

            <select value={payment}  onChange={handlepayment}>
                <option value=''>Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="gift card">Gift Card</option>
            </select>
            <p>payment : {payment}</p>

            <label>
                <input type="radio" value='pickup'
                checked={shipping === 'pickup'}
                onChange={handleshipping} />
                pickup
            </label> 
            <br />
            <label>
            <input type="radio" value='Delievry'
                checked={shipping === 'Delievry'}
                onChange={handleshipping} />
                Delievry
            </label>
            <p>Shipping : {shipping}</p>
        </div>

        
        </>
    )
}

export default MyComponent