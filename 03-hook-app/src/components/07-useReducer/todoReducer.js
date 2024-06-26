

export const todoReducer = (state = [], action ) => {
  switch (action.type) {
    case 'add':
        return [...state,action.payload];//ya que retornamos directamente no necesitamos  break
    case 'delete':
        return state.filter(todo=> todo.id !== action.payload)
    case 'done':
        return state.map(todo=>(todo.id === action.payload) ? {...todo,done:!todo.done} : todo);
            
    default:
        return state;
  }
}
