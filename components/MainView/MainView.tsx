import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function MainView() {
  const [aspectRatio, setAspectRatio] = useState(0); // not sure yet when to use state

  useEffect(() => {
    const handler = e => setAspectRatio(e);
    window.matchMedia("(min-aspect-ratio: 4/6)").addEventListener('change', handler);
  });

  return (
    <View style={styles.container}>
      <Image style={ aspectRatio ? styles.logoVertical : styles.logoHorizontal} source={require('../../assets/Logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%'
  },
  logoVertical: {
    height: '20%',
    width: '100%'
  },
  logoHorizontal: {
    height: '20%',
    width: '50%'
  }
});
