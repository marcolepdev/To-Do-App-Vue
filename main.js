const app = Vue.createApp({
    data() {
        return {
            el: '#app',
            addedTask: '',
            tasksToDo: [],
            warningText: '',
            maxLength: 40,
            completedTask: [],
            CompleteButton: 'Completed',
            allTasksGen: [],
            removedTasks: [],

        }
    },

    computed: {
        taskCount() {
            return this.tasksToDo.length;
        },
        completeTaskLength() {
            return this.completedTask.length;
        },
        allTasksCount() {
            return this.allTasks = this.completedTask.length + this.tasksToDo.length;
        },
        tasksRemovedCount(){
            return this.removedTasks.length;
        }
    },
    methods: {
        addTask() {
            const trimmedText = this.addedTask.trim();
            const whiteSpaces = this.addedTask.match(/^\s+/);

            if (this.addedTask === '') {
                this.warningText = 'Field is empty, please type something...';

            } else if (whiteSpaces && whiteSpaces[0].length >= 1) {
                this.warningText = 'No white spaces allowed at the beginning. Please try again';
                this.addedTask = '';
            } else {
                this.tasksToDo.push(trimmedText);
                this.allTasksGen.push(trimmedText);
                this.addedTask = '';
                this.warningText = '';
                console.log(this.tasksToDo);

            }



        },
        maxLengthInput(event) {
            if (event.target.value.length > this.maxLength) {
                this.warningText = 'text is too long';
                event.target.value = event.target.value.slice(0, this.maxLength);

            } else {
                this.warningText = ''
            }
        },
        taskEnter() {
            const trimmedText = this.addedTask.trim();
            const whiteSpaces = this.addedTask.match(/^\s+/);

            if (this.addedTask === '') {
                this.warningText = 'Field is empty, please type something...';

            } else if (whiteSpaces && whiteSpaces[0].length > 1) {
                this.warningText = 'too many white spaces at the beginning. Please type a proper word';
                this.addedTask = '';
            } else {
                this.tasksToDo.push(trimmedText);
                this.addedTask = '';
                this.warningText = '';

            }

        }

        ,
        removeTask(index) {
            const removedTask = this.tasksToDo.splice(index, 1)[0];
            this.removedTasks.push(removedTask);
            console.log(this.removedTasks);


            //            this.allTasks = this.allTasks.filter(t =>t!== task);
        },
        addCompleted(index) {
            //  this.completedTask.push(this.task);
            const task = this.tasksToDo.splice(index, 1)[0];
            this.completedTask.push(task);
            console.log(this.completedTask);


        },
    },
    mounted() {
        document.getElementById('app').classList.remove('hidden');
    }
}
);


app.mount('#app');