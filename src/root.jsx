import React from 'react';

export default class Root extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: [
                { title: 'Buy milk' },
                { title: 'Buy cat' },
                { title: 'Feed milk' }
            ]
        };
        this._addTodo = this._addTodo.bind(this);
        this._toggleComplete = this._toggleComplete.bind(this);
        this._removeTodo = this._removeTodo.bind(this);
    }

    _addTodo() {
        const { newTodo } = this.refs;
        if (newTodo.value) {
            const { todos } = this.state;
            todos.push({ title: newTodo.value });
            this.setState({ todos });
            newTodo.value = null;
        }
    }

    _toggleComplete(index) {
        const { todos } = this.state;
        const todo = todos[index];
        todo.completed = !todo.completed;
        this.setState({ todos })
    };

    _removeTodo(index) {
        const { todos } = this.state;
        todos.splice(index, 1);
        this.setState({ todos });
    }

    render() {
        const { todos } = this.state;
        return (
            <div>
                <input type="text" ref="newTodo" />
                <button onClick={this._addTodo}>Add Todo</button>
                <ul>
                    {
                        todos.map((todo, index) => (
                            <TodoItem
                                key={index}
                                todo={todo}
                                onComplete={this._toggleComplete}
                                onRemove={this._removeTodo}
                                index={index}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

class TodoItem extends React.Component {
    render() {
        const { todo, index, onComplete, onRemove } = this.props;
        return (
            <li>
                <span style={todo.completed ? style : {}} onClick={() => onComplete(index)}>{todo.title}</span>
                <button style={{marginLeft: 20}} onClick={() => onRemove(index)}>X</button>
            </li>
        )
    }
}

const style = {
    textDecoration: 'line-through'
};
