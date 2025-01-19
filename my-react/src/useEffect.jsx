import { useEffect , useState} from "react";
function LearnUseEffect(){
    const [count , setcoount] = useState(0);
    const [color , setcolor] = useState('green');


    useEffect(() =>{
        document.title = `Count : ${count} ${color}`;
    }, [count , color]);

    function addcount(){
        setcoount(c => c + 1);
    }

    function subtract(){
        setcoount(c => c -1);
    }
    function changecolor(){
        setcolor(c => c === 'green' ? 'red' : 'green');
    }
    return(
        <>
        <p style={{color : color}}>Coount : {count}</p>
        <button onClick={addcount}>Add</button>
        <br />
        <button onClick={subtract}>subtract</button>
        <br />
        <button onClick={changecolor}>Change Color</button>
        </>
    );
}

export default LearnUseEffect;