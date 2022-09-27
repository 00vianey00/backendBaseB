//http://localhost:4000/api/v1/messages/

const{Router} =require('express')
const router = Router()
const {
    rootMessage, 
    hiMessage,
    byeMessage,
    postMessage,
    putMessage,
    deleteMessage
} = require('../controllers/messages')

router.get('/',rootMessage)// End point
router.get('/hi',hiMessage)
router.get('/bye',byeMessage)

router.post('/', postMessage)//crear o añadir
router.put('/', putMessage)//actualizar registro
router.delate('/', deleteMessage)//eliminar registro

   module.exports = router 