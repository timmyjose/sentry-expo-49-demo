import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import * as Sentry from 'sentry-expo'
import SentryDemo from './components/SentryDemo'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home'

Sentry.init({
  dsn: 'https://e42bcb1c0807cae30d09f99f42eec33f@o235927.ingest.sentry.io/4506817460371456',
  debug: true,
  enableInExpoDevelopment: true,
  integrations: [
    new Sentry.Native.ReactNativeTracing({
    enableAppStartTracking: false
  })]
})

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='SentryDemo' component={SentryDemo} />
      </Stack.Navigator>
    </NavigationContainer>
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
