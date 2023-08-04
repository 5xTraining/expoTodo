import { createContext, useReducer, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'

const initialState = {
  inputText: '',
  todos: [],
  modalVisible: {
    confirm: false,
    edit: false
  },
  chooseId: null,
  editText: ''
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
        chooseId: action.payload,
        editText: state.todos.find((todo) => todo.id === action.payload).text
      }
    case 'SET_MODAL_VISIBLE':
      return {
        ...state,
        modalVisible: {
          ...state.modalVisible,
          [action.payload.name]: action.payload.visible
        }
      }
    case 'EDIT_ITEM':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        )
      }
    case 'SET_EDIT_TEXT':
      return {
        ...state,
        editText: action.payload
      }
    case 'LOAD_STATE':
      return action.payload
    default:
      return state
  }
}

const Store = createContext(initialState)

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const loadData = async () => {
      const savedState = await SecureStore.getItemAsync('savedState')
      if (savedState) {
        dispatch({ type: 'LOAD_STATE', payload: JSON.parse(savedState) })
      }
    }
    loadData()
  }, [])

  useEffect(() => {
    const saveData = async () => {
      await SecureStore.setItemAsync('savedState', JSON.stringify(state))
    }
    saveData()
  }, [state])

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}

export { Store, StoreProvider }
