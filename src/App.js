/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useMemo, useState, useCallback} from 'react';
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

  const [history, setHistory] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const onBtnColorClick = useCallback(
    color => {
      setHistory([...history.slice(0, selectedIndex + 1), color]);
      setSelectedIndex(selectedIndex + 1);
    },
    [history, selectedIndex, setHistory, setSelectedIndex],
  );

  const onUndoClick = useCallback(() => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }, [selectedIndex, setSelectedIndex]);

  const onRedoClick = useCallback(() => {
    if (selectedIndex < history.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  }, [selectedIndex, history, setSelectedIndex]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.buttonsWrapper}>
            {colorButtons.map(item => (
              <Button
                key={item.color}
                text=""
                style={{backgroundColor: item.color, marginRight: 20}}
                onClick={() => onBtnColorClick(item.color)}
              />
            ))}
            <Button
              text="Undo"
              style={{borderWidth: 2, borderColor: '#000', marginRight: 20}}
              onClick={onUndoClick}
            />
            <Button
              text="Redo"
              style={{borderWidth: 2, borderColor: '#000'}}
              onClick={onRedoClick}
            />
          </View>
          <View style={styles.squareWrapper}>
            <Square
              width={120}
              bgColor={
                history && history.length > 0 ? history[selectedIndex] : '#000'
              }
            />
          </View>
          <View style={styles.history}>
            {history &&
              history.map((color, idx) => (
                <View style={styles.historyItem} key={idx}>
                  <Square
                    width={30}
                    bgColor={color}
                    isActive={idx === selectedIndex}
                  />
                </View>
              ))}
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
