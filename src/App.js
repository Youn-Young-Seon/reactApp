import React, { useEffect } from 'react';
import GlobalStyle from './styles/global';
import Login from './components/login/Login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Join from './components/join/Join';
import { api } from './utils/api';

function App() {
  const navigate = useNavigate();
  const session = localStorage.getItem("sessionId");

  useEffect(() => {
    (session) ? navigate('/') : navigate('/login')
  }, [])  

  const logout = () => {
    localStorage.removeItem("sessionId");
    api.post("/logout", null, (data) => {
      console.log(data);
    });
    navigate('/login');
  }

  return (
    <>
      <GlobalStyle/>
      <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path="/join" element={<Join/>}/>
          <Route path="/" element={<><button onClick={ logout }>logout</button></>}/>
      </Routes>
    </>
  );
}

export default App;
