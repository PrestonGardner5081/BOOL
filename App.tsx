import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/Logo.png')} />
      {/* <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: '20%',
    width: '100%'
  }
});
