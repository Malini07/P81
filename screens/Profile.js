import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      
        <Text style={styles.paragraph}>Profile </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
