import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Browse from './components/Browse';
import LoginPage from './components/pages/login/loginPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';

function Routing() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        console.log("user check value ", user)
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    
    return () => unsubscribe();
  }, [])

  return (
    <>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/header" element={<Header />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default Routing;
