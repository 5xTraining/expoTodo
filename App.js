import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { RootSiblingParent } from 'react-native-root-siblings'
import { StoreProvider } from './src/store'
import Head from './src/components/Head'
import List from './src/components/List'
import ConfirmModal from './src/components/ConfirmModal'
import EditModal from './src/components/EditModal'

export default function App() {
  return (
    <StoreProvider>
      <RootSiblingParent>
        <SafeAreaView style={styles.container}>
          <Head />
          <List />
          <ConfirmModal />
          <EditModal />
          <StatusBar style='auto' />
        </SafeAreaView>
      </RootSiblingParent>
    </StoreProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#42A6DE'
  }
})
