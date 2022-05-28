/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, Component} from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

class App extends Component {
  state = {
    corrects: 0,
    currentIndex: 0,
    buttonClass: ['', '', '', ''],
    buttonBackgroundColour: ['', '', '', ''],
    statusBarWidth: new Animated.Value(1),
    topics: [
      {
        question: 'JavaScript 與 Java 有什麼關係？',
        answers: [
          {
            value: '同公司的產品',
            correct: false,
          },
          {
            value: '新版與舊版的關係',
            correct: false,
          },
          {
            value: '一點關係也沒有',
            correct: true,
          },
          {
            value: 'JavaScript 是 Java 的 Web 版本',
            correct: false,
          },
        ],
      },
      {
        question: '發明 React JS 的公司是？',
        answers: [
          {
            value: 'Google',
            correct: false,
          },
          {
            value: 'Facebook',
            correct: true,
          },
          {
            value: 'Apple',
            correct: false,
          },
          {
            value: 'Microsoft',
            correct: false,
          },
        ],
      },
    ],
  };

  showAnswer(idx, correctness) {
    const newBtnClass = ['', '', '', ''];
    const btnClassName = correctness ? 'correct' : 'wrong';
    newBtnClass[idx] = btnClassName;
    let newBtnBkgColour = ['', '', '', ''];
    newBtnBkgColour[idx] = correctness
      ? {backgroundColor: '#4FFF87'}
      : {backgroundColor: '#FF7056'};
    setTimeout(() =>
      this.setState({
        buttonClass: newBtnClass,
        buttonBackgroundColour: newBtnBkgColour,
      }),
    );
  }

  nextQuestion(correctness) {
    Animated.timing(this.state.statusBarWidth, {
      toValue: ((this.state.currentIndex + 1) / this.state.topics.length) * 100,
      duration: 500,
    }).start();

    setTimeout(
      () =>
        this.setState({
          corrects: this.state.corrects + (correctness ? 1 : 0),
          currentIndex: this.state.currentIndex + 1,
          /*
          statusBarWidth:
            ((this.state.currentIndex + 1) / this.state.topics.length) * 100 +
            '%',
            */
          buttonClass: ['', '', '', ''],
          buttonBackgroundColour: ['', '', '', ''],
        }),
      1000,
    );
  }

  checkAnswer = (ansId, correctness) => {
    this.showAnswer(ansId, correctness);
    this.nextQuestion(correctness);
  };

  startOver = () => {
    this.setState({
      corrects: 0,
      currentIndex: 0,
      statusBarWidth: new Animated.Value(1),
    });
  };

  render() {
    const width = this.state.statusBarWidth.interpolate({
      inputRange: [0, 100],
      outputRange: [0, Dimensions.get('window').width],
    });

    return (
      <>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <Animated.View
            style={{
              ...styles.statusBar,
              width: width,
            }}></Animated.View>
          {this.state.currentIndex < this.state.topics.length ? (
            <View style={styles.topicsContainer}>
              <Text style={styles.title}>
                {this.state.topics[this.state.currentIndex].question}
              </Text>

              {this.state.topics[this.state.currentIndex].answers.map(
                (answer, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => this.checkAnswer(index, answer.correct)}>
                      <View
                        style={{
                          ...styles.button,
                          ...this.state.buttonBackgroundColour[index],
                        }}>
                        <Text style={styles.buttonTitle}>{answer.value}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                },
              )}
            </View>
          ) : (
            <View style={styles.result}>
              <Text style={styles.resultTitle}>Completed!</Text>
              <Text style={styles.resultScore}>
                Your Score is{' '}
                {Math.round(
                  (this.state.corrects / this.state.topics.length) * 100,
                ) || 0}
              </Text>
              <TouchableOpacity onPress={this.startOver}>
                <View style={styles.button}>
                  <Text style={styles.buttonTitle}>Start Over</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: 5,
    backgroundColor: '#FFBA4F',
  },
  topicsContainer: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 34,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e9e9e9',
    marginTop: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  buttonTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  result: {
    marginTop: 120,
    padding: 20,
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultScore: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
});

export default App;
