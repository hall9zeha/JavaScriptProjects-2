

export const todoReducer = (state = [], action ) => {
  switch (action.type) {
    case 'add':
        return [...state,action.payload];//ya que retornamos directamente no necesitamos  break
    case 'delete':
        return state.filter(todo=> todo.id !== action.payload)
        
    default:
        return state;
  }
}
