var model = {
    todos: [], // story 1
    create: function(todo) { // story 1
        this.todos.push(todo)
    },
    read_all: function() { // step2 
        return this.todos
    },
    update_one: function(old_value, new_value){
        // update this.todos
        // this.todos.clean(old_value)
        // this.todos.clean(new_value)

        var index = this.todos.indexOf(old_value);

        if (index !== -1) {
            this.todos[index] = new_value;
        }
    }
};