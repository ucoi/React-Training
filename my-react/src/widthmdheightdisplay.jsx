import { useEffect , useState} from "react";
function Widthheightdisp(){
    const [width , setwidth] = useState(window.innerWidth)
    const [height , setheight] = useState(window.innerHeight)

    window.addEventListener('resize' , handleresize)

    useEffect(() => {
        window.addEventListener('resize' , handleresize)
    })

    function handleresize(){
        setwidth(window.innerWidth)
        setheight(window.innerHeight)
    }
    return(
        <>
        <p>window width :  {width}</p>
        <p>window height:  {height}</p>
        </>
    );
}

export default Widthheightdisp;