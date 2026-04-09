import { useState } from "react";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    console.log('toggle sign in form')
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <form className="flex flex-col bg-[#00000085] p-10 rounded-md w-[22%]">
        <p className="text-white p-3 text-2xl font-semibold">{isSignInForm ? 'Sign In' : 'Sign Up'}</p>
        {!isSignInForm && <input
          type="text"
          id="name"
          placeholder="Full Name"
          className="p-3 m-2 rounded bg-[#4c5055] text-white placeholder-gray-400"
        />}
        <input
          type="text"
          id="email"
          placeholder="Email address"
          className="p-3 m-2 rounded bg-[#4c5055] text-white placeholder-gray-400"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="p-3 m-2 rounded bg-[#4c5055] text-white placeholder-gray-400"
        />
        <button className="p-3 m-2 cursor-pointer rounded bg-[#e50914] text-white font-bold hover:bg-red-700 transition">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now'}</p>
      </form>
    </div>
  );
};

export default Login;