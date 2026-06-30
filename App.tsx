import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>CVision</Text>
        <Text style={styles.subtitle}>Mobile app coming together</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 32, fontWeight: '700', color: '#5B4FE8' },
  subtitle: { fontSize: 14, color: '#666', marginTop: 8 },
});

export default App;
