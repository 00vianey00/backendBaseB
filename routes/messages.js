//http://localhost:4000/api/v1/messages/

const{Router} =require('express')
const router = Router()
const {
    rootMessage, 
    hiMessage,
    byeMessage
} = require('../controllers/messages')

router.get('/',rootMessage)// End point
router.get('/hi',hiMessage)
router.get('/bye',byeMessage)

   module.exports = router 