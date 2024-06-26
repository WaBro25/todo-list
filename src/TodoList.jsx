import {TodoItem} from "./TodoItem"

// eslint-disable-next-line react/prop-types
export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className="list">
            {/* eslint-disable-next-line react/prop-types */}
            {todos.length === 0 && "No Todos"}
            {/* eslint-disable-next-line react/prop-types */}
            {todos.map(todo => {
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}