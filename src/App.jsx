import {Routes, Route}from 'react-router-dom'
import Homeuser from './Haluser/Haluser.jsx'
import Homecafe from './Haluser/Homecafe.jsx'

function App(){
  return(
    <Routes>
      <Route path='/' element={<Homeuser />}></Route>
      <Route path='cafe' element={<Homecafe />}></Route>
    </Routes>

  )
}

export default App;