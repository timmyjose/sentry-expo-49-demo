import { StyleSheet, Button, Text, View } from 'react-native'
import SentryDemo from './components/SentryDemo'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <Button title='Try Sentry' onPress={() => navigation.navigate('SentryDemo')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home
