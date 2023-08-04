import { useContext } from 'react'
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox'
import { Store } from '../store'

const Item = ({ item, onToggleItem }) => (
  <View style={styles.item}>
    <View style={styles.checkboxAndText}>
      <Checkbox
        value={item.checked}
        onValueChange={onToggleItem}
        color={item.checked && '#1dee98'}
      />
      <Text style={[styles.itemText, item.checked && styles.finishItemText]}>
        {item.text}
      </Text>
    </View>
  </View>
)

const List = () => {
  const { state, dispatch } = useContext(Store)

  const handleToggleItem = (id) => {
    dispatch({ type: 'TOGGLE_ITEM', payload: id })
  }

  const renderItem = ({ item }) => (
    <Item item={item} onToggleItem={() => handleToggleItem(item.id)} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={state.todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 20
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10
  },
  checkboxAndText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
    color: '#fff'
  },
  finishItemText: {
    textDecorationLine: 'line-through'
  },
  emptyWrap: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500'
  },
  emptyImage: {
    width: 200,
    height: 200
  }
})

export default List
