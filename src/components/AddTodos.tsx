import './AddTodos.css';

function AddTodos() {
    return ( 
    <div className="AddTodos">
        <h1>Add A New Todo</h1>
        <div className="todo-input-field">
            <label>
                Add New Todo
            </label>
            <input />
            <button>Add</button>
        </div>
    </div> );
}

export default AddTodos;