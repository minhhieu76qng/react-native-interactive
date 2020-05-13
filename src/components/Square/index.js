import React, {useMemo} from 'react';
import {View, Text} from 'react-native';

const Square = ({width, bgColor = '#000', style = {}, isActive = false}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {isActive && <Text>></Text>}
      <View
        style={{
          width,
          height: width,
          backgroundColor: bgColor,
          ...style,
        }}
      />
    </View>
  );
};

export default Square;
