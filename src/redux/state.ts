const state = [
  {
    id: 1, 
    category: 'Дома', 
    todos: [ {title:'Убраться', completed: false}, {title:'Приготовить', completed: false}, {title:'Сделать', completed: false}],
    finished: [  {id: 9, title: 'Постирать'}, {id: 10, title: 'Помыть'}]
  },
  {
    id: 2, 
    category: 'Работа', 
    todos: [ { title:'Позвонить', completed: false}, {title:'Договориться', completed: false},{title:'Написать', completed: false}, ]
  },
  { 
    id: 3, 
    category: 'Магазин', 
    todos: [ {title:'Купить', completed: false}, {title:'Найти', completed: false}, {title:'Заказать', completed: false}, ]
  },
]

// const AddTodo = () => {
//   let newTodo: {
//     title: message,
//     completed: false
//   }
// }

export default state