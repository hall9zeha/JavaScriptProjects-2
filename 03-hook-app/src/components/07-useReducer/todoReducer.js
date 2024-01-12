

export const todoReducer = (state = [], action ) => {
  switch (action.type) {
    case 'add':
        return [...state,action.payload];//ya que retornamos directamente no necesitamos  break
        
    default:
        return state;
  }
}
