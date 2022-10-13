import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBeXEDa6LRa1uM-zDhmimeAyCBxRvwVMlw",
    authDomain: "react-andrew-mccoy.firebaseapp.com",
    databaseURL:
        "https://react-andrew-mccoy-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-andrew-mccoy",
    storageBucket: "react-andrew-mccoy.appspot.com",
    messagingSenderId: "581910947119",
    appId: "1:581910947119:web:7d7060d38fed3fe91badda",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
    await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) =>
    await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

export const db = getDatabase(app);

export const getChats = () => ref(db, "chats");
