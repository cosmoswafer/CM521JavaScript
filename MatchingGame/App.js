import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Card} from './Card.js';

class App extends Component {
  emojis = [
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '😅',
    '😂',
    '🤣',
    '🥲',
    '☺️',
    '😊',
    '😇',
    '🙂',
    '🙃',
    '😉',
    '😌',
    '😍',
    '🥰',
  ];
  boardSize = 16;

  state = {
    tries: 0,
    endGame: false,
    cards: [],
    firstOpenedCard: -1,
    secondOpenedCard: -1,
  };

  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  drawCardNumbers() {
    const numbers = new Array();
    for (let i = 0; i < this.boardSize / 2; i++) {
      numbers.push(i);
      numbers.push(i);
    }

    return this.shuffle(numbers);
  }

  drawGameBoard() {
    const cards = new Array();
    for (let i of this.drawCardNumbers()) {
      cards.push({
        number: i,
        isOpen: false,
        cover: this.emojis[i],
      });
    }

    return cards;
  }

  componentDidMount() {
    this.resetGame();
  }

  flipCard(i) {
    const newCards = [...this.state.cards];
    const currentCard = newCards[i];
    currentCard.isOpen = !currentCard.isOpen;
    return newCards;
  }

  openCard = index => {
    this.setState({tries: this.state.tries + 1, cards: this.flipCard(index)});
  };

  endGame = () => {
    this.setState({endGame: true});
  };

  resetGame = () => {
    this.setState({
      tries: 0,
      endGame: false,
      cards: this.drawGameBoard(),
      firstOpenedCard: -1,
      secondOpenedCard: -1,
    });
  };

  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Matching Game</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.gameBoard}>
              {this.state.cards.map((c, i) => {
                return (
                  <Card
                    style={styles.button}
                    handler={this.openCard}
                    key={i}
                    index={i}
                    cover={c.cover}
                    isOpen={c.isOpen}
                  />
                );
              })}
            </View>
          </View>
          <View style={styles.footer}>
            {this.state.endGame ? (
              <View>
                <Text style={styles.footerText}>
                  End Game in {this.state.tries} steps!
                </Text>
                <TouchableOpacity onPress={this.resetGame}>
                  <Text>Again</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <Text style={styles.footerText}>
                  You have tried {this.state.tries} time(s).
                </Text>
              </View>
            )}
          </View>
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
    //backgroundColor: '#eee',
  },
  headerText: {
    fontSize: 32,
    textAlign: 'center',
    paddingTop: 32,
  },
  main: {
    flex: 3,
    //backgroundColor: 'yellow',
  },
  gameBoard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
    margin: (Dimensions.get('window').width - 48 * 4) / (4 * 2) - 4 * 2,
  },
  button: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    margin: (Dimensions.get('window').width - 48 * 4) / (4 * 2) - 4 * 2,
  },
  buttonText: {
    fontSize: 30,
  },
  footer: {
    flex: 1,
    //backgroundColor: '#eee',
  },
  footerText: {
    paddingTop: 32,
    textAlign: 'center',
  },
});

export default App;
