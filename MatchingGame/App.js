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
  lastOpenedCard = -1;
  matchedCard = 0;

  state = {
    tries: 0,
    endGame: false,
    cards: [],
    lastOpenedCard: -1,
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

  flipCard(...cards) {
    const newCards = [...this.state.cards];
    for (let c of cards) {
      const currentCard = newCards[c];
      currentCard.isOpen = !currentCard.isOpen;
    }
    this.setState({tries: this.state.tries + 1, cards: newCards});
  }

  open1stCard(index) {
    this.lastOpenedCard = index;
  }

  closeCards(card1, card2) {
    setTimeout(() => this.flipCard(card1, card2), 1000);
  }

  isMatched(cardId1, cardId2) {
    const card1 = this.state.cards[cardId1];
    const card2 = this.state.cards[cardId2];
    console.log(card1, card2, 'checking matched');
    return card1.number == card2.number;
  }

  open2ndCard(currentCard) {
    if (!this.isMatched(this.lastOpenedCard, currentCard)) {
      console.log('Not matched');
      this.closeCards(this.lastOpenedCard, currentCard);
    } else {
      console.log('Matched!');
      this.matchedCard += 2;
    }
    this.lastOpenedCard = -1;
  }

  openCard = index => {
    const currentCard = this.state.cards[index];
    if (currentCard.isOpen) {
      return;
    }

    this.lastOpenedCard == -1
      ? this.open1stCard(index)
      : this.open2ndCard(index);
    this.flipCard([index]);

    if (this.matchedCard >= this.boardSize) {
      this.endGame();
    }
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
          {this.state.endGame ? (
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                End Game in {this.state.tries} steps!
              </Text>
              <TouchableOpacity
                style={styles.footerButton}
                onPress={this.resetGame}>
                <Text>Play Again</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                You have tried {this.state.tries} time(s).
              </Text>
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
  header: {
    flex: 1,
  },
  headerText: {
    fontSize: 32,
    textAlign: 'center',
    paddingTop: 32,
  },
  main: {
    flex: 3,
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
  footerButton: {
    marginTop: 16,
    backgroundColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    padding: 8,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  footerText: {
    paddingTop: 32,
  },
});

export default App;
