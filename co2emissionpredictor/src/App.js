import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/login/Login'
import Signup from './components/signup/Signup';
import Prediction from './pages/Prediction';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/prediction' element={<Prediction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
