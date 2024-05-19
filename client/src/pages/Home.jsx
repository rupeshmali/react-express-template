import Todos from "../components/todos/Todos"


const Home = () => {
    return (
        <div className="p-5">
            <div className="text-lg py-3 border-b mb-3">
                Today's To Do's
            </div>
            <Todos />
        </div>
    )
}
export default Home