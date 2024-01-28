import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SpinAndWin from './src/screens/SpinAndWin';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SpinAndWin></SpinAndWin>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
