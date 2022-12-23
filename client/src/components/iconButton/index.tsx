import React from 'react';
import {Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  name: string;
  size: number;
  color: string;
  onPress: () => void;
  disabled?: boolean;
}

const IconButton = ({name, size, color, onPress, disabled}: Props) => {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
