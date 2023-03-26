import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuthHook from "../hooks/useAuthHook";

const Register = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const navigate = useNavigate()
  const {signUpUser} = useAuthHook()

  const handleRegsiter = (e) => {
    e.preventDefault();
    signUpUser(loginInfo)
  };

  return (
    <form onSubmit={handleRegsiter} className='flex flex-col gap-5 w-80 md:w-[500px] mx-auto mt-10'>
      <input
        onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
        type="email"
        placeholder="email"
        className="outline-none border border-gray-200 focus:border-gray-400 px-2 py-1"
      />
      <input
        onChange={(e) =>
          setLoginInfo({ ...loginInfo, password: e.target.value })
        }
        type="password"
        placeholder='password'
        className="outline-none border border-gray-200 focus:border-gray-400 px-2 py-1"
      />
      <button onClick={handleRegsiter} className='border border-gray-400'>Register</button>
      <button onClick={() => navigate('/login')} className='border border-gray-400'>go to Login</button>
    </form>
  );
};

export default Register;
