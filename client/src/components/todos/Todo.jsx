import { TbTrash } from 'react-icons/tb';
import { deleteTodo, updateTodo } from "../../api/todos"

const Todo = ({ id, name, completed, description }) => {
    return (
        <div
            className={
                `p-3 border rounded bg-white border-l-4 relative
                ${completed ? 'border-l-blue-200' : 'border-l-red-200'}`
            }
            onClick={() => updateTodo(id, { completed: !completed })}
        >
            <div className="font-medium text-slate-900">
                {name}
            </div>
            <div className="text-sm text-slate-600 mt-2">
                {description}
            </div>
            <div
                className="
                absolute h-6 w-6 flex items-center justify-center rounded 
                top-3 right-3 cursor-pointer hover:bg-red-100
                "
                onClick={() => deleteTodo(id)}
            >
                <TbTrash className='text-red-500' />
            </div>
        </div>
    )
}
export default Todo