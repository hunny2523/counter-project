
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCuT1p0TlzY0W5C8EvgIgpcw-d5jiaIg5M",
    authDomain: "counter-project-29b8d.firebaseapp.com",
    projectId: "counter-project-29b8d",
    storageBucket: "counter-project-29b8d.appspot.com",
    messagingSenderId: "666239231608",
    appId: "1:666239231608:web:914ecd2c9c574ebf54ef8d",
    measurementId: "G-TDMYDZJ4LC"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
