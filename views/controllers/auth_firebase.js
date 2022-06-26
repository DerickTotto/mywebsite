import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class auth_firebase{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    login(){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
}