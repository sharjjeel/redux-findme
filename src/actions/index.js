let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const popUp = (form) => ({
  type: 'POP_UP',
  form
})

export const setUser = (form) => ({
    type: 'SET_USER',
    username: form.username,
    description: form.description
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
