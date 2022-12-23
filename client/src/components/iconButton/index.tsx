import React from 'react';
import {Pressable, StyleProp, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  style?: StyleProp<ViewStyle>;
  name: string;
  size: number;
  color: string;
  onPress: () => void;
  disabled?: boolean;
}

const IconButton = ({style, name, size, color, onPress, disabled}: Props) => {
  return (
    <Pressable style={style} onPress={onPress} disabled={disabled}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
