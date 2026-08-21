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
    // getter qui accède au state et qui renvois toutes les todos
    allTodos: (state) => {return state.todos}
  },
  // méthodes setters
  actions: {
    // action qui fetch l'api pour récup les données
    async getApiTodos() {
      await fetch(urlApi)
      .then (res => res.json())
      .then((res) => {
        const tableau = Object.entries(res).map(([id, item]) => ({
          id,
          ...item,
        }))
        this.todos = tableau
      })
      .catch (err => {console.log(err)})
    },
    // action qui changera la valeur de 'done' avec l'api
    async toggleDone(id, statu) {
      await fetch(`https://ingrwf13-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
      {
        method: "PATCH",
        //headers: "Content-Type: application/json",
        body: JSON.stringify({ done: statu}),
      })
      .then (res => res.json())
      .then((res) => {
        const tableau = Object.entries(res).map(([id, item]) => ({
          id,
          ...item,
        }))
        this.todos = tableau
      })
      .catch (err => {console.log(err)})
    },
  },
})