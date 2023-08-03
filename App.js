import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { StoreProvider } from './src/store'
import Head from './src/components/Head'

export default function App() {
  return (
    <StoreProvider>
      <SafeAreaView style={styles.container}>
        <Head />
        <StatusBar style='auto' />
      </SafeAreaView>
    </StoreProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#42A6DE',
  }
})
