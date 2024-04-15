
import './App.css'

import Home from './pages/Home';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import MesFormations from './pages/MesFormations';
import ProetectedRoutes from './components/route/ProetectedRoutes';



function App() {

  return (
    <div >
    <Router>
      <Routes>
        

          <Route path='/' element={ <Home /> }/>
          <Route path="/register/" element={<Register/>} />
          <Route path="/login/" element={<Login/>} />
          <Route path='/formations/:profileId' element={<ProetectedRoutes>
          <MesFormations/>
        </ProetectedRoutes>
      
      }/>
          {/* 
          
          <Route path="/post/:postId" element={<ProtectedRoute> <SinglePost/> </ProtectedRoute>}/>
          <Route path="/profile/:profileId" element={<ProtectedRoute> <Profile/> </ProtectedRoute>}/> */}
      </Routes>
    </Router>

    </div>
  )
}

export default App
