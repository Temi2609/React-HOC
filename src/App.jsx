import Clickcounter from './components/Clickcounter'
import ClickDisplay from './components/ClickDIsplay'
import Hovercounter from './components/HoverCounter';
import HoverDisplay from './components/HoverDisplay';


function App() {
  const ShowWithHOC = Clickcounter(ClickDisplay);
  const ShowHoverHoc = Hovercounter(HoverDisplay)

  return (
    <>
      <div>
        <ShowWithHOC/>
      </div>

      <div>
        <ShowHoverHoc/>
      </div>
    </>
  )
}

export default App
