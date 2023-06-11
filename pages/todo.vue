<template>
  <div>
    <h1>Todo</h1>
    <input
      type="text"
      v-model="todo"
      @keyup.enter="addTodo"
      placeholder="Add todo"
    />
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="flex">
        <input
          type="checkbox"
          :checked="todo.done"
          @change="toggleTodo(todo.id)"
        />
        <span class="flex-grow">{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const todo = ref<string>("");
const todos = ref<Todo[]>([]);
// add todo
const addTodo = () => {
  if (!todo.value) {
    return;
  }
  todos.value.push({
    id: todos.value.length + 1,
    text: todo.value,
    done: false,
  });
  todo.value = "";
};
// toggle todo
const toggleTodo = (id: number) => {
  const todo = todos.value.find((todo) => todo.id === id);
  if (todo) {
    todo.done = !todo.done;
  }
};
// remove todo
const removeTodo = (id: number) => {
  const index = todos.value.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.value.splice(index, 1);
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.flex {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
