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

const newTask = {
    tasks: [
        {
            id: 1,
            name: 'Test',
            description: 'Описание',
            order: 0
        }
    ]
}

newTask.addTask = toDoList.addTask.bind(newTask);
newTask.removeTask = toDoList.removeTask.bind(newTask);
newTask.updateTask = toDoList.updateTask.bind(newTask);
newTask.sortTasks = toDoList.sortTasks.bind(newTask);

newTask.addTask('Ещё одна задача', 51);
newTask.addTask('Ещё одна задача 2', 7);
newTask.addTask('Ещё одна задача 3', 15);
newTask.removeTask(1);
newTask.updateTask(4, 'Ещё одна задача 2 (измененная)', 8);
newTask.sortTasks();