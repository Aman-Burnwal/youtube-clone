import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCFJV72_2xsq4xkZCdMlSl6VAGdGG1dGiQ",
    authDomain: "clone-88736.firebaseapp.com",
    projectId: "clone-88736",
    storageBucket: "clone-88736.appspot.com",
    messagingSenderId: "423752847774",
    appId: "1:423752847774:web:4782a2101386878e63068f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
