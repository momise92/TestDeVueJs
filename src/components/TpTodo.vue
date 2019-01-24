<template>
    <div>
        <h1 class="title">Mini TP TODOLIST</h1>
        <p>Ajouter un UL et un BUTTON</p>
        <form @submit="addTodo">
            <input type="text" v-model="newTodo" :class="{warning: !newTodo.length}">
            <button>ok</button>
        </form>
    <h2 class="title">My todo list</h2>
    <p v-if="!todos.length">
        <b>You have  nothing to do... yet</b>
    </p>
    <ul v-else id="todos">
        <li v-for="(todo, n) in todos" :key="n" class="item" :class="{even: n % 2 === 0}">
            <span>{{ n + 1}}</span>
            <span> {{todo}} </span>
            <button @click="removeTodos(n)">X</button>
        </li>
    </ul>
    </div>
</template>

<script>
    
export default {
    data() {
        return {
            newTodo : "",
            todos : []
        };
    },

    methods: {
        addTodo(e) {
          e.preventDefault();
          if (!this.newTodo) return;
          this.todos.push(this.newTodo);
          this.newTodo ="";
        },
        removeTodos(index) {
            this.todos.splice(index, 1);
        }
    }
}
</script>

<style scoped>
.warning {
    background: orange;
}
.even {
    background: silver;
}
#todos {
    max-width: 540px;
    margin: 60px auto 0;
}
.item {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0 20%;
}
</style>

