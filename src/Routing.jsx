import { createBrowserRouter, Routes, Route, BrowserRouter } from 'react-router-dom'
// import Login from './components/LoginPage'
import Header from './components/Header'
import Browse from './components/Browse';
import LoginPage from './components/pages/login/loginPage';
// import LoginPage from './components/Login';

function Routing() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/header" element={<Header />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing;
