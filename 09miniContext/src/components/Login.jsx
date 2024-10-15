import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className=" flex justify-center items-center flex-col gap-2">
      <h2 className="text-white text-3xl text-center ">Login</h2>
      <input 
      className="border border-gray-300 rounded-md p-2"
      type="text" 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Username"
      />
      {" "}
      <input 
      type="password" 
      className="border border-gray-300 rounded-md p-2"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
       />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Login</button>
    </div>
  );
};
export default Login;
