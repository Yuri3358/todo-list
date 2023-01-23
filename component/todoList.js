const todoList = {
    template: todoListTemplate,
    
    data() {
        return {
            tasks: Vue.ref([]),
            taskInput: "",
            tasksAmount: 0
        }
    },
    mounted() {
        this.getTasks()
    },
    methods: {
        findTask() {
            let docRef
            const search = this.tasks.value.find(task => task.name == this.taskInput)
            if (search) {
                docRef = colRef.doc(search.taskID)
            }
            return docRef
        },
        getTasks() {
            let data = []
            colRef.get().then(snapshot => {
                snapshot.forEach(doc => {
                    const tasks = doc.data()
                    tasks.taskID = doc.id
                    data.push(tasks)
                })
                this.tasks.value = data
                this.tasksAmount = data.length
                this.$refs.taskField.focus()
                this.taskInput = ""
            })   
        },
        async addTask() {
            if (this.taskInput != "") {
                await colRef.add({
                    name: this.taskInput.charAt(0).toUpperCase() + this.taskInput.slice(1),
                    completed: "Não"
                })
            } else {
                alert("Preencha o campo!")
            }
            this.getTasks()
        }, 
        async deleteTask() {
            if (this.taskInput != "" && !(this.taskInput in this.tasks.value)) {
                this.findTask().delete()
            } else {
                alert("Selecione uma tarefa válida!")
            }
            this.getTasks()
        },
        async completeTask() {
            await this.findTask().update({
                completed: "Sim"
            })
            this.getTasks()
        }
    }
}

exports = {todoList}