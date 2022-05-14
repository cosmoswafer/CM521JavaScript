import React, { Component } from 'react';
import './App.css';
import state from './State.js';

class App extends Component {
    state = state;

    showAnswer(idx, correctness) {
        const newBtnClass = ['', '', '', ''];
        const btnClassName = correctness ? 'correct' : 'wrong';
        newBtnClass[idx] = btnClassName;
        setTimeout(() => this.setState({ buttonClass: newBtnClass }));
    }

    nextQuestion(correctness) {
        setTimeout(
            () =>
                this.setState({
                    corrects: this.correct + correctness ? 0 : 1,
                    currentIndex: this.state.currentIndex + 1,
                    statusBarWidth:
                        ((this.state.currentIndex + 1) /
                            this.state.topics.length) *
                            100 +
                        '%',
                    buttonClass: ['', '', '', ''],
                }),
            1000
        );
    }

    checkAnswer = (ansId, correctness) => {
        this.showAnswer(ansId, correctness);
        this.nextQuestion(correctness);
    };

    startOver = () => {
        this.setState({ corrects: 0, currentIndex: 0, statusBarWidth: '1%' });
    };

    render() {
        return (
            <div className="App">
                <div
                    className="statusBar"
                    style={{ width: this.state.statusBarWidth }}
                ></div>

                {this.state.currentIndex < this.state.topics.length ? (
                    <div className="topics-container">
                        <h2>
                            {
                                this.state.topics[this.state.currentIndex]
                                    .question
                            }
                        </h2>

                        {this.state.topics[this.state.currentIndex].answers.map(
                            (a, i) => {
                                return (
                                    <button
                                        key={i}
                                        className={this.state.buttonClass[i]}
                                        onClick={() => {
                                            this.checkAnswer(i, a.correct);
                                        }}
                                    >
                                        {a.value}
                                    </button>
                                );
                            }
                        )}
                    </div>
                ) : (
                    <div className="fireworks">
                        <div className="before"></div>
                        <div className="after"></div>
                        <div className="result">
                            <h2>Completed!</h2>
                            <h3>
                                Your Score is{' '}
                                {Math.round(
                                    (this.state.corrects /
                                        this.state.topics.length) *
                                        100
                                ) || 0}
                            </h3>
                            <button onClick={this.startOver}>Start Over</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
