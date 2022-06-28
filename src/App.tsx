import React from 'react';
import {Dimensions, StyleSheet, SafeAreaView} from 'react-native';

import LineChartContainer from './components/LineChartContainer';

const {width} = Dimensions.get('screen');

const CARD_WIDTH = width - 20;
const CARD_HEIGHT = 325;

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LineChartContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  graphCard: {
    elevation: 5,
    borderRadius: 20,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default App;
