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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  state = {
    corrects: 0,
    currentIndex: 0,
    buttonClass: ['', '', '', ''],
    statusBarWidth: '1%',
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
    setTimeout(() => this.setState({buttonClass: newBtnClass}));
  }

  nextQuestion(correctness) {
    setTimeout(
      () =>
        this.setState({
          corrects: this.state.corrects + (correctness ? 1 : 0),
          currentIndex: this.state.currentIndex + 1,
          statusBarWidth:
            ((this.state.currentIndex + 1) / this.state.topics.length) * 100 +
            '%',
          buttonClass: ['', '', '', ''],
        }),
      1000,
    );
  }

  checkAnswer = (ansId, correctness) => {
    this.showAnswer(ansId, correctness);
    this.nextQuestion(correctness);
  };

  startOver = () => {
    this.setState({corrects: 0, currentIndex: 0, statusBarWidth: '1%'});
  };

  render() {
    return (
      <>
        <SafeAreaView>
          <Text
            className="statusBar"
            style={{width: this.state.statusBarWidth}}></Text>

          {this.state.currentIndex < this.state.topics.length ? (
            <View style={styles.topicsContainer}>
              <Text style={styles.topicsTitle}>
                {this.state.topics[this.state.currentIndex].question}
              </Text>

              {this.state.topics[this.state.currentIndex].answers.map(
                (a, i) => {
                  return (
                    <Button
                      key={i}
                      className={this.state.buttonClass[i]}
                      onPress={() => {
                        this.checkAnswer(i, a.correct);
                      }}
                      title={a.value}
                    />
                  );
                },
              )}
            </View>
          ) : (
            <View className="result">
              <Text>Completed!</Text>
              <Text>
                Your Score is{' '}
                {Math.round(
                  (this.state.corrects / this.state.topics.length) * 100,
                ) || 0}
              </Text>
              <Button onPress={this.startOver} title="Start Over" />
            </View>
          )}
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  topicsContainer: {
    padding: '32px',
  },
  topicsTitle: {
    fontSize: '32px',
  },
});

export default App;
