import express from 'express'
import { CreateTodos, GetAllTodos, UpdateTodos } from '../controller/todoController'

const router = express.Router()

router.post('/createEvent',CreateTodos)
router.get('/getEvent',GetAllTodos)
router.patch('/updateEvent', UpdateTodos)
// router.delete('/createEvent',)
export default router 