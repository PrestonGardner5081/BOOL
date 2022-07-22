import { StyleSheet, Text, View, Image } from 'react-native';
import Navbar from './components/Navbar/Navbar'
import MainView from './components/MainView/MainView'

export default function App() {
  return (
    <View style={styles.topView}>
      <MainView />
      <Navbar/>
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    width: '100%',
    height: '100%'
  }
});
