const toDoList = {
    tasks: [],
    addTask: function(title, priority) {
        this.tasks.push({
            id:  this.tasks.length ? this.tasks[this.tasks.length - 1]['id'] + 1 : 1,
            title,
            priority
        });
    },
    removeTask: function(id) {
        const newTasks = this.tasks.filter(task => task.id !== id);

        this.tasks = newTasks;
    },
    updateTask: function(id, title, priority) {
        const newTasks = this.tasks.map(task => task.id === id ? {
            id: task.id,
            title,
            priority
        } : task);

        this.tasks = newTasks;
    },
    sortTasks: function() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }
}