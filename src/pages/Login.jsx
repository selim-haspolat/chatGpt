import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthHook from "../hooks/useAuthHook";

const Login = () => {
  const [registerInfo, setRegisterInfo] = useState({});
  const { signInUser } = useAuthHook();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInUser(registerInfo);
  };
  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-5 w-80 md:w-[500px] mx-auto mt-10"
    >
      <input
        onChange={(e) =>
          setRegisterInfo({ ...registerInfo, email: e.target.value })
        }
        type="email"
        placeholder="email"
        className="outline-none border border-gray-200 focus:border-gray-400 px-2 py-1"
      />
      <input
        onChange={(e) =>
          setRegisterInfo({ ...registerInfo, password: e.target.value })
        }
        type="password"
        placeholder="password"
        className="outline-none border border-gray-200 focus:border-gray-400 px-2 py-1"
      />
      <button onClick={handleLogin} className="border border-gray-400">
        Login
      </button>
      <button
        onClick={() => navigate("/register")}
        className="border border-gray-400"
      >
        go to Register
      </button>
    </form>
  );
};

export default Login;
