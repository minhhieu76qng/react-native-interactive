import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const MyButton = ({text, onClick, style}) => {
  console.log(style);
  return (
    <TouchableOpacity style={{...styles.default, ...style}} onPress={onClick}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
export default MyButton;
