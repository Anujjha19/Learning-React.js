import React, { useCallback, useState } from 'react'
import TodoS from './TODOUseCB'

const UseCB = () => {

    const [todos, setTodos] = useState([])
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }

    const addTodo = useCallback(() => {
        setTodos((prev) => [...prev, `new Entry `])
            // eslint-disable-next-line
    }, [todos])

    return (
        <div>
            <TodoS todos={todos} addTodo={addTodo} />
            <hr />
            Count : {count}
            <button onClick={increment} > ➕</button>
        </div>
    )
}

export default UseCB
