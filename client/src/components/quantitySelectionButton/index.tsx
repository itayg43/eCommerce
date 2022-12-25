import React from 'react';
import {View, Text} from 'react-native';

import {CHANGE_QUANTITY_ACTION} from '../../utils/enums';
import IconButton from '../iconButton';
import styles from './quantitySelectionButtonStyles';

interface Props {
  quantity: number;
  onChange: (action: CHANGE_QUANTITY_ACTION) => void;
}

const QuantitySelectionButton = ({quantity, onChange}: Props) => {
  return (
    <View style={styles.container}>
      {/** minus */}
      <IconButton
        name="minus"
        size={18}
        color="white"
        onPress={() => onChange(CHANGE_QUANTITY_ACTION.DECREMENT)}
        disabled={quantity === 1}
      />

      {/** quantity */}
      <Text style={styles.quantity}>{quantity}</Text>

      {/** plus */}
      <IconButton
        name="plus"
        size={18}
        color="white"
        onPress={() => onChange(CHANGE_QUANTITY_ACTION.INCREMENT)}
      />
    </View>
  );
};

export default QuantitySelectionButton;
