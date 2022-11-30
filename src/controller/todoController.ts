import express, {Request, Response} from 'express'
import { Todo } from '../Model/todoModel'

export const CreateTodos = async(req:Request, res:Response)=>{
    // const {description, status} = req.body
    try{
        const Todos = new Todo(req.body)
        await Todos.save();

        return res.status(200).json({
            Msg:"Event Succesfully Created",
            Todos
        
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            Error: "internal server error",
            Route: "/createTodo"
        })
    }
}

export const GetAllTodos = async(req:Request, res:Response)=>{
    try {
        const Todos = await Todo.find({})
        res.status(200).json({
            Msg: "Events successfully retrived ",
            Todos
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            Error: "internal server error",
            Route: "/GetAllTodos"
        })
    }
}
export const UpdateTodos = async(req:Request, res:Response)=>{
    try {
        const Todos = await Todo.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            Msg: "Events successfully Updated ",
            Todos
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            Error: "internal server error",
            Route: "/updateTodos"
        })
    }
}
