//http://localhost:4000/api/v1/messages/

const{Router} =require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('Mensajes')
   }) //End point 

   router.get('/hi', (req, res) => {
    res.send('Hola mundo')
   }) //End point 

   router.get('/', (req, res) => {
    res.send('Hola mundo')
   }) //End point 

   router.get('/bye', (req, res) => {
    res.send('Adiós mundo')
   }) //End point 

   module.exports = router 