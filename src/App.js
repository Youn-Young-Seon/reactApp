import React, { useEffect } from 'react';
import GlobalStyle from './styles/global';
import Login from './components/login/Login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Join from './components/join/Join';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginInfo, logout } from './components/login/Login.Slice';

function App() {
  const navigate = useNavigate();
  const loginInfo = useSelector(getLoginInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if(loginInfo.login.sessionId === null || loginInfo.login.sessionId === '' || loginInfo.login.sessionId === undefined){
      navigate('/login');
    }else{
      navigate('/');
    }
  }, [loginInfo])  

  return (
    <>
      <GlobalStyle/>
      <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path="/join" element={<Join/>}/>
          <Route path="/" element={<><button onClick={() => dispatch(logout())}>logout</button>{ loginInfo.login.name }</>}/>
      </Routes>
    </>
  );
}

export default App;
