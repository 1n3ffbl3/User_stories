var controller = {
    add_todo: function(todo) { // story 1
        model.create(todo)
    },
    read_all: function() {
        var all = model.read_all()
        view.render_all(all)
    }
};