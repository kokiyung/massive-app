import {Routes, Route}from 'react-router-dom'
import Homeuser from './Haluser/Haluser.jsx'
import Homecafe from './Haluser/Homecafe.jsx'
import Loginuser from './Haluser/Login/Loginuser.jsx'
import Registeruser from './Haluser/Login/Registeruser.jsx'

function App(){
  return(
    <Routes>
      <Route path='/' element={<Homeuser />}></Route>
      <Route path='Cafe' element={<Homecafe />}></Route>
      <Route path='Loginuser' element={<Loginuser />}></Route>
      <Route path='Registeruser' element={<Registeruser />}></Route>
    </Routes>

  )
}

export default App;