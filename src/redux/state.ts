let state = {
  todoList: [
    {
      id: 0, 
      category: 'Семья', 
      todos: [ {id: 1, title:'Купить продукты', completed: false}, {id: 2, title:'Заполнить отчет', completed: false} ],
      finished: [  {id: 9, text: 'Постирать'}, {id: 10, text: 'Помыть'}]
    },
    {
      id: 1, 
      category: 'Работа', 
      todos: [ { id: 1, title:'Заполнить отчет', completed: false}, ]
    },
    { 
      id: 2, 
      category: 'Прочее', 
      todos: [ {id: 1, title:'Подготовиться к поездке', completed: false}, {id: 2, title:'Отправить документы', completed: false}, ]
    },
  ],
  onCategory: 0
}

export const deleteTodo = (id: number) => {
    state.todoList[state.onCategory].todos.filter(todo => todo.id !== id)
}


export let onCompleted = (id: number) => {
  state.todoList[0].todos[id - 1].completed = true
}

export let onDelete = (id: number) => {
  state.todoList[0].todos.filter(todo => todo.id != id)
}

let countTodo =  () => {
  return state.todoList.length
} 

export const setCategory = (id: number) => {
  state.onCategory = id
}

export const addTodo = (message: string) => {
  let newTodoItem = {
    title: message,
    completed: false
  }
  state.todoList[state.onCategory].todos.push(newTodoItem)
}

export const addNewCategory = (title: string) => {
  let newCategory = {
    id: countTodo(),
    category: title,
    todos: [],
    finished: []
  }
  state.todoList.push(newCategory)
}

export default state