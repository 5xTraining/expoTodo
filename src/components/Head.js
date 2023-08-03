import { useContext } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Store } from '../store'

const Head = () => {
  const { state, dispatch } = useContext(Store)
  const { inputText, todos } = state

  const handleInputText = (text) => {
    dispatch({ type: 'SET_INPUT_TEXT', payload: text })
  }

  const handleAddItem = () => {
    if (inputText.trim() === '') {
      
    }
    dispatch({ type: 'ADD_TODO', payload: inputText })
  }

  return (
    <>
      <Text style={styles.title}>Todos</Text>
      <View style={styles.inputArea}>
        <TextInput
          value={inputText}
          placeholder='請輸入事項'
          onChangeText={handleInputText}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddItem} style={styles.button}>
          <Text>新增</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    alignSelf: 'flex-start',
    marginBottom: 10,
    color: '#eae6e6'
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  input: {
    borderColor: '#bcb9b9',
    borderWidth: 1,
    borderRadius: 5,
    height: '100%',
    width: '80%',
    paddingHorizontal: 15,
    fontSize: 20,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5
  }
})

export default Head
