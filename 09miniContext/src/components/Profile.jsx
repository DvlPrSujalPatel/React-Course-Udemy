import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {

  const { user } = useContext(UserContext);
  if (!user) return <h1>Not Logged In</h1>

  return (
    <div className="flex justify-center items-center flex-col gap-2 mt-4">
        <h1 className="text-white text-3xl text-center">Profile : {user.username}</h1>
    </div>
  ) 
}
export default Profile