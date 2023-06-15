import React, { useState } from "react";
import PopUpError from "../../components/PopUpError";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [validation,setValidation] = useState(false)

  const akun = {
    username :"kuwan22",
    password:"kuwangaming22"
  }

  const router = useNavigate()

  const handleSubmit = ()=>{
    if (username == akun.username && password ==akun.password) {
        router("/admin")
    } else {
        setValidation(true)
    }
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-yellow-500">
        {validation && <PopUpError desc={"Login Error"} setValidation={setValidation}/>}
      <div className="w-[80%] bg-gray-300 relative rounded-lg overflow-hidden">
        <img src="/login-admin.jpg" alt="" />
        <div className="relative flex flex-col mx-4">
          <label
            htmlFor="name"
            className="absolute top-6 left-2 text-gray-500 leading-tight font-[500]"
          >
            username :
          </label>
            <input
              id="username"
              className="pl-[89px] mt-4 shadow bg-white appearance-none border rounded w-full h-full py-2 px-3 text-gray-700 font-[500] leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          <div className="relative">
            <label
              htmlFor="name"
              className="absolute top-6 left-2 text-gray-500 leading-tight font-[500]"
            >
              password :
            </label>
          </div>
          <input
            id="password"
            className="pl-[89px] mt-4 shadow bg-white appearance-none border rounded w-full h-full py-2 px-3 text-gray-700 font-[500] leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className={`h-full my-4 border-none  rounded-none rounded-sm text-[.9rem] ${
              username.length > 0 && password.length >0? "bg-blue-500" : "bg-gray-400"
            }`}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
