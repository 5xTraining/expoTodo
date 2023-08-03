import { useContext } from 'react'
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native'
import { Store } from '../store'

const Item = ({ item }) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  </View>
)

const List = () => {
  const { state, dispatch } = useContext(Store)

  const renderItem = ({ item }) => <Item item={item} />

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
    color: '#fff',
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
