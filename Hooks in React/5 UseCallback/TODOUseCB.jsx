import { memo } from "react";

const TodoS = ({ todos, addTodo }) => {
    console.log('Child Render')

    const styles = {
        heading: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '10px'
        },
        todoItem: {
            fontSize: '18px',
            margin: '5px 0'
        },
        addButton: {
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }
    }

    return (
        <>
            <h2 style={styles.heading}> My Todos </h2>
            {todos.map((todo, index) => {
                return <p key={index} style={styles.todoItem}>{todo + index}</p>
            })}
            <button onClick={addTodo} style={styles.addButton}> Add Todo </button>
        </>
    )
}

export default memo(TodoS);
