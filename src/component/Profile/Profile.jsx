import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

 

const Profile = () => {

    const {user} = useContext(AuthContext)
    console.log(user)

    return (
        <div className="container mx-auto">
            <div  className="text-4xl text-red-500 text-center mt-10">
            <h1>{user.displayName}</h1>
            <h2>Your Email: {user.email}</h2>
            <img className="ml-[700px] mt-10" src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Profile;