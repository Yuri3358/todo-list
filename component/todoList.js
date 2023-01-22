const todoList = {
    template: todoListTemplate,
    data() {
        return {
            todos: Vue.ref([]),
            todoTitle: "",
        }
    },
    mounted() {
        this.getTodos()
    },
    methods: {
        findTodo() {
            let docRef
            const search = this.todos.value.find(todo => todo.name == this.todoTitle)
            if (search) {
                docRef = colRef.doc(search.todoID)
            }
            return docRef
        },
        getTodos() {
            let data = []
            colRef.get().then(snapshot => {
                snapshot.forEach(doc => {
                    const todos = doc.data()
                    todos.todoID = doc.id
                    data.push(todos)
                })
            })   

            this.todos.value = data
            this.todoTitle = ""
        },
        async addTodo() {
            if (this.todoTitle != "") {
                await colRef.add({
                    todo: this.todoTitle,
                    completed: false
                })
            } else {
                alert("Preencha o campo!")
            }
        }, 
        async deleteTodo() {
            if (this.todoTitle != "" && !(this.todoTitle in this.todos.value)) {
                this.findTodo().delete()
            } else {
                alert("Selecione uma tarefa válida!")
            }
        },
        async completeTodo() {
            await this.findTodo().update({
                completed: true
            })
        }
    }
}

exports = {todoList}