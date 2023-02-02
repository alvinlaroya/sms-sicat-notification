import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2NKwx--8b3KpkjV7sCclWiT2fCG_DHUw",
    authDomain: "sicat-notification.firebaseapp.com",
    projectId: "sicat-notification",
    storageBucket: "sicat-notification.appspot.com",
    messagingSenderId: "469680270335",
    appId: "1:469680270335:web:a6a19dc19f87e3105f55ca",
    measurementId: "G-LWJGF5R5QB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;