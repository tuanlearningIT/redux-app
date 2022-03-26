import { useEffect, useState } from "react";
import './Todo.scss';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { markComplete, addNewTodos, deleteTodo, getTodo } from "../store/actions/todoAction";
import { v4 as uuidv4 } from 'uuid';
const Todo = ({ todos, markComplete, addNewTodos, deleteTodo, getTodo }) => {

    const [title, setTitle] = useState('')
    //get todo
    useEffect(() => {

        getTodo()
    }, [])
    const addNewTodo = () => {
        if (title !== '') {
            let newTodo = {
                id: uuidv4(),
                title: title,
                completed: false
            }
            addNewTodos(newTodo)

            setTitle('')
        }


    }

    return (
        <div className="todo-container">
            <div className="header col-6">
                <div className="todo-length text-center">
                    total todos: {todos.length}
                </div>
                <InputGroup className="mb-3 mt-3" >
                    <FormControl
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button className="add" variant="primary" onClick={addNewTodo}>Add</Button>
            </div>

            {
                todos && todos.length > 0 &&
                todos.map(item => {
                    return (
                        <div className='content' key={item.id}>

                            <div className={item.completed === true ? 'completed' : 'body'} >
                                {item.title}

                                <span><input type='checkbox' onChange={markComplete.bind(this, item.id)} /></span>
                                <span><button onClick={deleteTodo.bind(this, item.id)}>Delete</button></span>
                            </div>


                        </div>
                    )
                })
            }
        </div>

    )
}
Todo.propTypes = {
    todos: PropTypes.array.isRequired,
    // markComplete: PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        todos: state.myTodos.todos,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        markComplete: (id) => dispatch(markComplete(id)),
        addNewTodos: (todo) => dispatch(addNewTodos(todo)),
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        getTodo: (todo) => dispatch(getTodo(todo)),

    };

}
export default connect(mapStateToProps, mapDispatchToProps)(Todo)