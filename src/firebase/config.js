import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyB3bx76H2XfbMUZVnxjoQmT6ey1hCknPBI",
  authDomain: "mt-automobi.firebaseapp.com",
  projectId: "mt-automobi",
  storageBucket: "mt-automobi.appspot.com",
  messagingSenderId: "369876155254",
  appId: "1:369876155254:web:c1dfa118df23172aed9857"
  };
  // apiKey: "AIzaSyB3bx76H2XfbMUZVnxjoQmT6ey1hCknPBI",
  // authDomain: "mt-automobi.firebaseapp.com",
  // projectId: "mt-automobi",
  // storageBucket: "mt-automobi.appspot.com",
  // messagingSenderId: "369876155254",
  // appId: "1:369876155254:web:c1dfa118df23172aed9857"

  // Old Firebase ID

  // apiKey: "AIzaSyCggZCcBun0cwNfOWGC2K8pZcgIRWMfqwY",
  // authDomain: "olx-sijeesh.firebaseapp.com",
  // projectId: "olx-sijeesh",
  // storageBucket: "olx-sijeesh.appspot.com",
  // messagingSenderId: "767411886432",
  // appId: "1:767411886432:web:2ef6862afc88f2c423a605",
  // measurementId: "G-4ELNR9DJHL"

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export