import { signOut } from "firebase/auth";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {

    const navigate = useNavigate();
    const handleSignOut = () => {
        console.log("sign out called!")
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('signed out success')
            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <>
        <div className="bg-linear-to-b from-black">
            <Header />
        </div>
            <h2>Browse movies here</h2>
            <button className="cursor-pointer bg-amber-500 px-2 py-1 rounded text-white font-semibold" onClick={handleSignOut}>Sign Out</button>
        </>
    )
}

export default Browse;