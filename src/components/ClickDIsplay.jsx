// import Clickcounter from "./Clickcounter"
import '../index.css'

const ClickDisplay = ({clickCount, handleClick})=>{
    return (
        <>
            <div className="components">
                <h1>Click Counter</h1>
                <p>I have been clicked {clickCount} times</p>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </>
    )
}
export default ClickDisplay;