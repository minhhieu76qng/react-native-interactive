/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useMemo} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';

import Button from './components/Button';
import Square from './components/Square';

const App = () => {
  const colorButtons = useMemo(() => {
    return [
      {
        text: 'Red',
        color: 'red',
      },
      {
        text: 'Green',
        color: 'green',
      },
      {
        text: 'Blue',
        color: 'blue',
      },
    ];
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.buttonsWrapper}>
            {colorButtons.map(item => (
              <Button
                text=""
                style={{backgroundColor: item.color, marginRight: 20}}
              />
            ))}
            <Button
              text="Undo"
              style={{borderWidth: 2, borderColor: '#000', marginRight: 20}}
            />
            <Button text="Redo" style={{borderWidth: 2, borderColor: '#000'}} />
          </View>
          <View style={styles.squareWrapper}>
            <Square width={120} />
          </View>
          <View style={styles.history}>
            <View style={styles.historyItem}>
              <Square width={30} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  squareWrapper: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 120,
    height: 120,
    backgroundColor: 'red',
  },
  smallSquare: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
  },
  buttonsWrapper: {
    zIndex: 100,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  history: {
    zIndex: 100,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  historyItem: {
    padding: 15,
  },
});

export default App;
