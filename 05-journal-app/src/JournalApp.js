import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'

export const JournalApp = () => {
  return (
    // El Provider de react-redux hace el mismo trabajo que el hock UseContext que es proveer información
    // A través de todos los componentes hijos de desde este punto
    <Provider store={store}>
      <AppRouter/>

    </Provider>
  )
}
