import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'

export default function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  const handleInputText = (text) => {
    setInputText(text)
  }

  const handleAddItem = () => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        text: inputText,
        checked: false
      }
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
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
      <StatusBar style='auto' />
    </SafeAreaView>
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
