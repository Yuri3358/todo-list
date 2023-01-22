const todoListTemplate = `

<div id="content" @keyup.enter="addTask" @keyup.esc="deleteTask">
    <header>Lista de Afazeres</header>
    <div id="form">
        <label for="task">Tarefa</label> <br/>
        <input id="task" autocomplete=off ref="taskField" v-model="taskInput"> <br/>
        <button class="btn btn-success" @click="addTask">Adicionar</button>
        <button class="btn btn-warning" @click="completeTask">Concluir</button>
        <button class="btn btn-danger" @click="deleteTask">Excluir</button>
    </div>

    <div id="table-container">
        <table class="table table-striped table-secondary">
            <thead>
                <tr class="table-dark">
                    <th>Tarefas</th>
                    <th>Completa?</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="task in this.tasks.value">
                    <td @click="this.taskInput = task.name">{{ task.name }}</td>
                    <td>{{ task.completed }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`

exports = {todoListTemplate}