import React, {useMemo} from 'react';
import {View} from 'react-native';

const Square = ({width, bgColor = '#000', style = {}, isActive = false}) => {
  const borderStyle = useMemo(() => {
    if (!isActive) {
      return {};
    }
    return {
      borderColor: '#000',
      borderWidth: 1,
    };
  }, [isActive]);
  return (
    <View
      style={{
        width,
        height: width,
        backgroundColor: bgColor,
        ...style,
        ...borderStyle,
      }}
    />
  );
};

export default Square;
