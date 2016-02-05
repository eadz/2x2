import React, { View, Text } from 'react-native';

import styles from './styles/default';

class TwoByTwoCards extends React.Component {
  render() {
    return (
      <View style={[styles.container, { flexDirection: 'row' }]}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}><Text>One</Text></View>
          <View style={{ flex: 1 }}><Text>Two</Text></View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}><Text>Three</Text></View>
          <View style={{ flex: 1 }}><Text>Four</Text></View>
        </View>
      </View>
    );
  }
}

export default TwoByTwoCards;
