import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../configs/AuthContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/gallery");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="bg-gallery bg-cover bg-center h-screen bg-no-repeat flex items-center justify-center">
      <div className="w-[400px] rounded-lg overflow-hidden">
        <div className="absolute inset-0 opacity-60 backdrop-blur-sm"></div>

        <div className="relative z-10 px-8 py-2">
          <p className=" text-white font-bold text-2xl">Image Gallery</p>
          <p className="text-white font-bold text-4xl my-4">Login</p>
          {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-8"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-2 rounded-lg bg-white border border-gray-300"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded-lg bg-white border border-gray-300"
            />

            <button className="bg-blue-800 w-full py-2 rounded-md text-white text-center">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
