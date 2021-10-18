import * as firebase from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
//require('dotenv').config()
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  }
  

const app = firebase.initializeApp(firebaseConfig)
export const getFirebase = ()=>{
    return app
}

export const db = getFirestore(app)