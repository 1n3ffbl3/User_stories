var terminal_handler = {
    add_todo: function(todo) { // story 1
        controller.add_todo(todo);
    },
    read_all: function() { // story 2
        controller.read_all();
    },
    update_one: function(old_value, new_value){
        controller.update_one(old_value, new_value);
    }
};