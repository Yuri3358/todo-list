const firestoreConfig = {
    apiKey: "AIzaSyCQE5L2USuvV6Vf0ayav_PJxbxx9CFAcFk",
    authDomain: "todo-list-e278c.firebaseapp.com",
    projectId: "todo-list-e278c",
    storageBucket: "todo-list-e278c.appspot.com",
    messagingSenderId: "650247825963",
    appId: "1:650247825963:web:7978d8c688e7310532986e",
    measurementId: "G-5MG57FM3EF"
}

firebase.initializeApp(firestoreConfig)

const db = firebase.firestore()
const colRef = db.collection("todos")

exports = {colRef}