import { useState } from "react"

const Clickcounter = (Component)=>{
    const ClickCounter =(props)=>{
        const [clickCount, setclickCount] = useState(0);

        const handleClick = ()=>{
            setclickCount(clickCount+1)
        }

        return <Component {...props} clickCount = {clickCount} handleClick = {handleClick}/>

    }
    return ClickCounter;   
    
}

export default Clickcounter;