
import './index.css'
import './App.css'
import Header from './components/Header'
import PartOne from './components/PartOne'
import PartTwo from './components/PartTwo'
import PartThree from './components/PartThree'
import LastPart from './components/LastPart'

function App() {


  return (
    <>
      <Header />
      
      <div className="parts-container">
      <PartOne />
      <PartTwo />
      <PartThree />
      <LastPart />
      </div>
    </>
  )
}

export default App
