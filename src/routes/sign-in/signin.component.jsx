import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../util/firebase/firebase.util";

const Signin = () => {
    const logGoogleuser = async () => {
        const {user} = await signInWithGooglePopup();
        
        createUserDocumentFromAuth(user)
    }
    return(
        <div> 
            <h1> Hello there...</h1>
        <button onClick={logGoogleuser}>
            Sign in With Google 
        </button>
        </div>
    )
}

export default Signin;
