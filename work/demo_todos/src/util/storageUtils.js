const TODOS_KEY = 'TODOS_KEY'
export default {
  getTodos () {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  },
  saveTodos (todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  }
}
