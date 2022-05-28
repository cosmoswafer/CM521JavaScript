import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Card extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.handler(this.props.index)}
          style={{...this.props.style}}>
          <Text style={styles.cardContent}>
            {this.props.isOpen ? this.props.cover : '?'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContent: {
    fontSize: 32,
  },
});

export {Card};
