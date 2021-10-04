import * as firebase from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBMFlrWHNYOeHxEJ3ttILBjeaDBx3_dSiw",
    authDomain: "prueba-app-coder.firebaseapp.com",
    projectId: "prueba-app-coder",
    storageBucket: "prueba-app-coder.appspot.com",
    messagingSenderId: "867727996394",
    appId: "1:867727996394:web:e0f1f07834d584a5dd6e93"
  }
  

const app = firebase.initializeApp(firebaseConfig)
export const getFirebase = ()=>{
    return app
}

export const db = getFirestore(app)