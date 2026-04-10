import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
    // console.log("Auth ", auth)

    const user = useSelector((state) => state.user)

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
            <div className="px-88 py-2 flex justify-between items-center">
                <Logo />
                {user && <div className="flex gap-2 items-center">
                    <img className="w-8 rounded-full" alt="user icon" src={user.photoURL}></img>
                    <span className="text-amber-200 font-semibold">{user.displayName}</span>
                    <button className="cursor-pointer bg-red-500 px-2 py-1 rounded text-white font-semibold" onClick={handleSignOut}>Sign Out</button>
                </div>}
            </div>
        </>
    )
}

export default Header;