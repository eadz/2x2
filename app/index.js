import React, { View, Text } from 'react-native';

import styles from './styles/default';

const TwoByTwoCards = React.createClass({
  render() {
    return (
      <View style={[styles.container, { flexDirection: 'row' }]}>
        <View style={{ flex: 1 }}>
          <View style={styles.matrixInner}><Text>One</Text></View>
          <View style={styles.matrixInner}><Text>Two</Text></View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.matrixInner}><Text>Three</Text></View>
          <View style={styles.matrixInner}><Text>Four</Text></View>
        </View>
      </View>
    );
  },
});

export default TwoByTwoCards;
