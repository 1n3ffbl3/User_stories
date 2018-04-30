var model = {
    todos: [], // story 1
    create: function(todo) { // story 1
        this.todos.push(todo)
    },
    read_all: function() { // step2 
        return this.todos
    }
};