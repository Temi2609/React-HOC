import { useState } from "react"

const Hovercounter = (Component)=>{
    const HoverCounter = (props)=>{
            const [Hover, setHover] = useState(0)

            const handleHover = ()=>{
                setHover(Hover + 1)
            }
        return(
            <div onMouseOver={handleHover}>
                <Component {...props} Hover = {Hover}/> 
            </div>       
        )   
    }
    return HoverCounter;

}

export default Hovercounter;