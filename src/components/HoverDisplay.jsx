import '../index.css'
const HoverDisplay = ({Hover})=>{
    return(
        <>
        <div className="components">
            <h1>Hover Me</h1>
            <p>I have been Hovered {Hover} times</p>
        </div>
        </>
    )
}
export default HoverDisplay;