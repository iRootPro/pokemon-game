import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBhjnbFUD_LlecYi2_K3eNABACsdIiLqgE",
    authDomain: "pokemon-game-ab353.firebaseapp.com",
    databaseURL: "https://pokemon-game-ab353-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-ab353",
    storageBucket: "pokemon-game-ab353.appspot.com",
    messagingSenderId: "733373302128",
    appId: "1:733373302128:web:072f3a56d74b6bff397bb5"
};

firebase.initializeApp(firebaseConfig)
export const fire = firebase
export const database = fire.database()

export default database
