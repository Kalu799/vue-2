import { defineStore } from "pinia";

const urlApi = "https://ingrwf13-default-rtdb.europe-west1.firebasedatabase.app/todos.json"

// fct pour utiliser le store 'teams'
export const useTodoStore = defineStore('todos', {
  // state = objet avec les données
  state: () => ({
    todos:[],
  }),
  // méthodes getters
  getters: {
    allTodos: (state) => {return state.todos}
  },
  // méthodes setters
  actions: {
    async getApiTodos() {
      await fetch(urlApi)
      .then (res => res.json())
      .then (res => {this.todos = res})
      .catch (err => {console.log(err)})
    },
  },
})