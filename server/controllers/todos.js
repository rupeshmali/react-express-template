const Todo = require("../models/Todo")

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({
            userId: req.currentUser.id
        })
        return res.status(200).json({
            status: true,
            todos
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
}
exports.deleteTodo = async (req, res) => {
    const { id } = req.params
    try {
        const todo = await Todo.findOneAndDelete({
            _id: id,
            userId: req.currentUser.id
        })

        if (!todo) {
            throw new Error("Something went wrong...")
        }

        return res.status(200).json({
            status: true,
            todo
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
}
exports.createTodo = async (req, res) => {
    const { name, completed } = req.body
    try {
        if (!name) {
            throw new Error("Todo name is required");
        }

        const todo = await Todo.create({
            name,
            completed,
            userId: req.currentUser.id
        })

        return res.status(201).json({
            status: true,
            todo
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
}
exports.updateTodo = async (req, res) => {
    const { id } = req.params
    try {
        
        const todo = await Todo.findOneAndUpdate(
            {
                _id: id,
                userId: req.currentUser.id
            },
            {
                ...req.body
            },
            {
                new: true
            }
        )

        if (!todo) {
            throw new Error('Something went wrong...')
        }

        return res.status(200).json({
            status: true,
            todo
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
}
exports.getTodo = async (req, res) => {
    try {
        const todo = await Todo.findOne({
            _id: req.params.id,
            userId: req.currentUser.id
        })

        return res.status(200).json({
            status: true,
            todo
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

/**
 * user1 token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NWMyZjBkN2YzZTZlMTk0MDdiN2MzYiIsImlhdCI6MTcxNzMxODE4OX0.X786sBjzcYODqOj4df0s8DN-jnrCWHjjOOevnJFghF8
 * user2 token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NWMyZjE2N2YzZTZlMTk0MDdiN2MzZCIsImlhdCI6MTcxNzMyMDk4M30.7HY4PiG3z9beOVxWK_KlFSuSurQT9_eGPlXabpqrzyM
 */
