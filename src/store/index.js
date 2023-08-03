import { createContext, useReducer } from 'react'

const initialState = {
  inputText: '',
  todos: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INPUT_TEXT':
      return {
        ...state,
        inputText: action.payload
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.payload,
            checked: false
          }
        ],
        inputText: ''
      }
    default:
      return state
  }
}

const Store = createContext(initialState)

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  )
}

export { Store, StoreProvider }
