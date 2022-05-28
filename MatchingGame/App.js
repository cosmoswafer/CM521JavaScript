import React, {Component} from 'react';
import {SafeAreaView, StatusBar, View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.main}></View>
          <View style={styles.footer}></View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#eee',
  },
  main: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  footer: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

export default App;
