import { useEffect, useState } from "react"
import { getTodos } from "../../api/todos";
import Todo from "./Todo";


const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos().then(({ data }) => {
            setTodos(data.todos);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} />
            ))}
        </div>
    )
}
export default Todos