import { useContext } from 'react'
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native'
import { Store } from '../store'

const EditModal = () => {
  const { state, dispatch } = useContext(Store)
  const { modalVisible, chooseId, editText } = state

  const closeModel = () => {
    dispatch({
      type: 'SET_MODAL_VISIBLE',
      payload: { name: 'edit', visible: false }
    })
  }

  const handleSetText = (text) => {
    dispatch({ type: 'SET_EDIT_TEXT', payload: text })
  }

  const handleConfirmEdit = () => {
    dispatch({ type: 'EDIT_ITEM', payload: { id: chooseId, text: editText } })
    closeModel()
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible.edit}
        onRequestClose={closeModel}
      >
        <View style={styles.container}>
          <View style={styles.modalWrap}>
            <TextInput
              value={state.editText}
              onChangeText={handleSetText}
              autoCapitalize='none'
              placeholder='請輸入事項'
              style={styles.input}
            />
            <View style={styles.buttons}>
              <TouchableOpacity
                onPress={closeModel}
                style={[styles.button, { backgroundColor: '#f66162' }]}
              >
                <Text style={{ color: '#fff' }}>取消修改</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleConfirmEdit}
                style={[styles.button, { backgroundColor: '#a1f64c' }]}
              >
                <Text>確定修改</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalWrap: {
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 30,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '95%'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 40
  },
  button: {
    padding: 10,
    borderRadius: 5
  },
  input: {
    borderColor: '#bcb9b9',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 20,
    backgroundColor: '#fff',
    height: 50
  }
})

export default EditModal
