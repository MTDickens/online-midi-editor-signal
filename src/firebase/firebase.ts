import { initializeApp } from "firebase/app"
import { connectAuthEmulator, getAuth } from "firebase/auth"
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB3RMggiuswwVZVHZuE67uUml1ePrCl3sk",
  authDomain: "mtd-midi.firebaseapp.com",
  projectId: "mtd-midi",
  storageBucket: "mtd-midi.appspot.com",
  messagingSenderId: "506435978252",
  appId: "1:506435978252:web:ab6abbdedac7924fa0da29"
};

// Initialize Firebase
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const firestore = getFirestore(app)

if (process.env.NODE_ENV !== "production") {
  connectAuthEmulator(auth, "http://localhost:9099")
  connectFirestoreEmulator(firestore, "localhost", 8080)
}
