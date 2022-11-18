import express from 'express'
import bcrypt from 'bcrypt'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Configuracion de firebase
const firebaseConfig = {
    apiKey: "AIzaSyDvC-l7c6D364rh-sfUuTFV5H9ZfIM8YEA",
    authDomain: "demofinal-6d754.firebaseapp.com",
    projectId: "demofinal-6d754",
    storageBucket: "demofinal-6d754.appspot.com",
    messagingSenderId: "190676902097",
    appId: "1:190676902097:web:641b7c9f9248f5eed6a5f0"
  };
  
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig)
  const db = getFirestore()

  // Inicializar el servidor
  const app = express()

  // Middleware
  app.use(express.static("public"))
  app.use(express.json())

  // Rutas de trabajo 
  app.get('/', (req,res) => {
    res.sendFile('index.html', { root: "public"})
  })

  // Arrancamos servidor 
  const PORT = process.env.PORT || 3000
  app.listen(3000, ()=> {
    console.log(`Servidor en funcionamiento en el puerto: ${PORT}`)
  })