import { useContext } from 'react'
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Store } from '../store'

const ConfirmModal = () => {
  const { state, dispatch } = useContext(Store)
  const { modalVisible, chooseId } = state

  const closeModel = () => {
    dispatch({
      type: 'SET_MODAL_VISIBLE',
      payload: { name: 'confirm', visible: false }
    })
  }

  const handleDeleteItem = () => {
    dispatch({ type: 'DELETE_ITEM', payload: chooseId })
    closeModel()
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible.confirm}
        onRequestClose={closeModel}
      >
        <View style={styles.container}>
          <View style={styles.modalWrap}>
            <Text style={styles.title}>確定要刪除嗎？</Text>
            <View style={styles.buttons}>
              <TouchableOpacity
                onPress={closeModel}
                style={[styles.button, { backgroundColor: '#f66162' }]}
              >
                <Text style={{ color: '#fff' }}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDeleteItem}
                style={[styles.button, { backgroundColor: '#a1f64c' }]}
              >
                <Text>確定</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ConfirmModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalWrap: {
    paddingHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: '#333'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    padding: 10,
    borderRadius: 5
  }
})
