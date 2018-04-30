var controller = {
    add_todo: function(todo) { // story 1
        model.create(todo)
    },
    read_all: function() {
        var all = model.read_all()
        view.render_all(all)
    },
    update_one: function(old_value, new_value){
        var one = model.update_one(old_value, new_value)
        this.read_all()
    },
    delete_one: function(new_value){
        var one_to_be_deleted = model.delete_one(new_value)
        this.read_all()
    }
};