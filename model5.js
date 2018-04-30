var model_object = {
    todos: {}, // story 1
    create: function(todo) { // story 1
        this.todos.push(todo)
    },
    read_all: function() { // step2 
        return this.todos
    },
    update_one: function(old_value, new_value){
        this.todos.old_value = new_value;
    },
    delete_one: function(new_value){
        delete this.todos.new_value;
        }

    }
};