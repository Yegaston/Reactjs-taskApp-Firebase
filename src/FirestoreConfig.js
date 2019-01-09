import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyAU2jCIc7xIEyT_BMC6tjJMdnI78BeYHeg",
    authDomain: "reactjs-firebase-d5172.firebaseapp.com",
    databaseURL: "https://reactjs-firebase-d5172.firebaseio.com",
    projectId: "reactjs-firebase-d5172",
    storageBucket: "reactjs-firebase-d5172.appspot.com",
    messagingSenderId: "222455450239"
})

let bd = firebase.firestore();
bd.settings = ({timestampsInSnapshots: true})

export default bd