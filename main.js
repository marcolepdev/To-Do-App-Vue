const app = Vue.createApp({
    data() {
        return {
            el: '#app',
            addedTask: '',
            tasks: [],
            warningText: '',
            maxLength: 40

        }
    },
    computed: {
        taskCount() {
            return this.tasks.length;
        }
    },
    methods: {
        addTask() {
            const trimmedText = this.addedTask.trim();
            const whiteSpaces = this.addedTask.match(/^\s+/);

            if (this.addedTask === '') {
                this.warningText = 'Field is empty, please type something...';
            } else {
                if (whiteSpaces && whiteSpaces[0].length >= 1) {
                    this.warningText = 'No white spaces allowed at the beginning. Please try again';
                    this.addedTask = '';
                } else {
                    this.tasks.push(trimmedText);
                    this.addedTask = '';
                    this.warningText = ''

                }

            }

        },
        maxLengthInput(event) {
            if (event.target.value.length > this.maxLength) {
                this.warningText = 'text is too long';
                this.event.target.value.slice(0, 40);
                
            }else{
                this.warningText=''
            }
        },
        taskEnter() {
            const trimmedText = this.addedTask.trim();
            const whiteSpaces = this.addedTask.match(/^\s+/);

            if (this.addedTask === '') {
                this.warningText = 'Field is empty, please type something...';

            } else {
                if (whiteSpaces && whiteSpaces[0].length > 1) {
                    this.warningText = 'too many white spaces at the beginning. Please type a proper word';
                    this.addedTask = '';
                } else {
                    this.tasks.push(trimmedText);
                    this.addedTask = '';
                    this.warningText = ''
                }

            }

        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }
}
);


app.mount('#app');
