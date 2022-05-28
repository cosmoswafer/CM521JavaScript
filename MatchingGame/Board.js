import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Board extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.handler}>
          <Text>End</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export {Board};
