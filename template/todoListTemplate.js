const todoListTemplate = `

<div id="content">
    <header>Lista de Afazeres</header>
    <div id="form">
        <label for="todo">Afazer</label> <br/>
        <input id="todo" autocomplete=off> <br/>
        <button class="btn btn-success">Adicionar</button>
        <button class="btn btn-warning">Concluir</button>
        <button class="btn btn-danger">Excluir</button>
    </div>
</div>
`

exports = {todoListTemplate}