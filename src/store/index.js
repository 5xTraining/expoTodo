import { createContext, useReducer } from 'react'

const initialState = {
  inputText: '',
  todos: [],
  modalVisible: {
    confirm: false
  },
  chooseId: null
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
    case 'TOGGLE_ITEM':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, checked: !todo.checked }
            : todo
        )
      }
    case 'DELETE_ITEM':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      }
    case 'SET_CHOOSE_ID':
      return {
        ...state,
        chooseId: action.payload
      }
    case 'SET_MODAL_VISIBLE':
      return {
        ...state,
        modalVisible: {
          ...state.modalVisible,
          [action.payload.name]: action.payload.visible
        }
      }
    default:
      return state
  }
}

const Store = createContext(initialState)

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}

export { Store, StoreProvider }
