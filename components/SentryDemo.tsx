import { useNavigation } from '@react-navigation/native'
import { Button, View, StyleSheet } from 'react-native'
import * as Sentry from 'sentry-expo'

export function SentryDemo() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Button title='Trigger Sentry (raw)' onPress={() => { Sentry.Native.captureException('Raw error')}} />
            <Button title='Trigger Sentry' onPress={() => { Sentry.Native.captureException(new Error('error object')) }} />
            <Button title='Trigger Sentry (crash)' onPress={() => { throw new Error('Crash') } } />
            <Button title='Go back' onPress={() => navigation.goBack()} />
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

export default SentryDemo