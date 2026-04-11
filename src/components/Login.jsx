import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    // validate form first then navigate
    // console.log("submit clicked", email.current.value, password.current.value);
    const message = checkValidateData(email.current.value, password.current.value, name.current?.value, isSignInForm);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign up logic

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log('user', user);
          // ...

          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            console.log("current user: ", auth.currentUser);
            dispatch(addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            }));
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });

    }
    else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, ' ', errorMessage);
        });
    }

  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <form className="flex flex-col bg-[#00000085] p-10 rounded-md w-[22%]" onSubmit={(e) => e.preventDefault()}>
        <p className="text-white p-3 text-2xl font-semibold">{isSignInForm ? 'Sign In' : 'Sign Up'}</p>
        {!isSignInForm && <input
          ref={name}
          type="text"
          id="name"
          placeholder="Full Name"
          className="p-3 my-2 rounded bg-[#4c5055] text-white placeholder-gray-400"
        />}
        <input
          ref={email}
          type="text"
          id="email"
          placeholder="Email address"
          className="p-3 my-2 rounded bg-[#4c5055] text-white placeholder-gray-400"
        />
        <input
          ref={password}
          type="password"
          id="password"
          placeholder="Password"
          className="p-3 my-2 rounded bg-[#4c5055] text-white placeholder-gray-400"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button className="p-3 my-2 cursor-pointer rounded bg-[#e50914] text-white font-bold hover:bg-red-700 transition" onClick={handleSubmit}>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <span className="text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now'}</span>
      </form>
    </div>
  );
};

export default Login;