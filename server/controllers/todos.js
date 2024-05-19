let TODOS = [
    {
        id: 1,
        name: 'Todo 1',
        completed: false,
        description: 'This is todo 1'
    },
    {
        id: 2,
        name: 'Todo 2',
        completed: true,
        description: 'This is todo 2'
    },
    {
        id: 3,
        name: 'Todo 3',
        completed: false,
        description: 'This is todo 3'
    }
]
exports.getTodos = (req, res) => {
    // Implement logic to fetch all todos and send them in the response
    res.json({ todos: TODOS }); // replace with actual todo data
}

exports.getTodo = (req, res) => {
    // fetch todo with id
    const id = req.params.id
    // Implement logic to fetch all todos and send them in the response
    res.json({ todo: TODOS.find(todo => todo.id === +id) }); // replace with actual todo data
}

exports.createTodo = (req, res) => {
    const newTodo = req.body; // Access todo data from request body
    // Implement logic to create the new todo and send response
    TODOS.push(newTodo);
    res.json({ message: 'Todo created successfully', todo: newTodo });
}

exports.updateTodo = (req, res) => {
    const id = req.params.id;
    const data = req.body;

    let updatedTodo = {};
    TODOS = TODOS.map(todo => {
        if (todo.id === +id) {
            todo = {
                ...todo,
                ...data
            }
            updatedTodo = { ...todo }
            return todo;
        }
        return todo;
    });

    // Implement logic to update the todo with the given ID and send response
    res.json({ message: `Todo with ID ${id} updated successfully`, todo: updatedTodo });
}

exports.deleteTodo = (req, res) => {
    const id = req.params.id;
    const todo = TODOS.find(todo => todo.id === +id);
    TODOS = TODOS.filter(todo => todo.id !== +id);
    // Implement logic to delete the todo with the given ID and send response
    res.json({ message: `Todo with ID ${id} deleted successfully`, todo });
}