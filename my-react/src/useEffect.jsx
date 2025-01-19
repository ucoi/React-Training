import { useEffect , useState} from "react";
function LearnUseEffect(){
    const [count , setcoount] = useState(0);
    useEffect(() =>{
        document.title = `Count : ${count}`;
    }, [count]);

    function addcount(){
        setcoount(c => c + 1);
    }
    return(
        <>
        <p>Coount : {count}</p>
        <button onClick={addcount}>Add</button>
        </>
    );
}

export default LearnUseEffect;