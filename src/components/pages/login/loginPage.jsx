import Header from "../../Header";
import Login from "../../Login";

const LoginPage = () => {
    return (
        <div
            className="h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/fc9ebadf-d77a-4f9b-a0dd-499af5178dc5/web/IN-en-20260330-TRIFECTA-perspective_81d2307f-4ee1-416d-8721-ac2be7b2da1d_large.jpg')",
            }}
        >

            <div className="relative z-10 pt-4 bg-linear-to-b from-black">
                <Header />
            </div>

            <div className="bg-amber-100">
                <Login />
            </div>
        </div>
    );
};

export default LoginPage;