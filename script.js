Vue.createApp({
  data() {
    return {
      filter: "all",
      newTodo: "",
      todos: [
        { description: "learnCss", checked: false },
        { description: "Learn Html", checked: true },
        { description: "Learn Javascript", checked: false },
        { description: "Learn Dancing", checked: true },
        { description: "Learn Soccer", checked: false },
      ],
    };
  },
  methods: {
    deleteFinishedTask() {
      this.todos = this.todos.filter((todo) => !todo.checked);
    },
    addTodo() {
      if (this.newTodo.length > 0) {
        const newTodo = { description: this.newTodo, checked: false };
        this.todos.push(newTodo);
        this.newTodo = "";
      }
    },
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "open") {
        return this.todos.filter((todo) => !todo.checked);
      } else if (this.filter === "done") {
        return this.todos.filter((todo) => todo.checked);
      }
    },
  },
}).mount("#app");
