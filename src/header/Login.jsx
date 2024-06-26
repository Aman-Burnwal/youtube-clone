
import { useEffect, useState } from "react";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";


const Login = () => {

    const [value, setValue] = useState("");
    const [userName, setuserName] = useState("");
    // console.log(value)
    const handleClick = () => {
        
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            setuserName(data.user.displayName);
            console.log(data.user.displayName)

            // console.log(data.user.photoURL)
            localStorage.setItem("email", data.user.email);
            localStorage.setItem("userName", data.user.displayName);
        })
    }
    const handleLogout = () => {
        localStorage.removeItem("email");
        setValue("");
        localStorage.removeItem("userName");
        setuserName("");
    }
    useEffect(() => {
        setValue(localStorage.getItem("email"));
        setuserName(localStorage.getItem("userName"));
    }, [])
    // console.log(userName , value)
    return (
        <div className="absolute w-[280px] -ml-40 mt-4 bg-slate-300">
            {value ? (
                <div>
                    <div>{userName ? userName : "User" }</div>
                   {/* { console.log(userName)} */}
                    <button className="bg-red-400 w-fit  " onClick={handleLogout}>Logut</button>
                </div>
               
               
            ) : (
                <div>
                
                <button className="bg-red-400 w-full" onClick={handleClick}>Login in</button>
                 </div>
            )
            }
        
        </div>
    );
}
export default Login