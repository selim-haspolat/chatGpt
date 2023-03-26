import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="h-96 flex flex-col justify-center items-center gap-5">
      <button
        onClick={() => navigate("/login")}
        className="border border-gray-400  w-40 py-1 rounded"
      >
        Login
      </button>
      <button
        onClick={() => navigate("/register")}
        className="border border-gray-400  w-40 py-1 rounded"
      >
        Register
      </button>
    </div>
  );
};

export default Main;
