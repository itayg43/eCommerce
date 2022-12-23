import React from 'react';
import {View, Text} from 'react-native';

import {CHANGE_QUANTITY_ACTION} from '../../screens/productDetailsScreen';
import IconButton from '../iconButton';
import styles from './changeQuantityPanelStyles';

interface Props {
  quantity: number;
  onChange: (action: CHANGE_QUANTITY_ACTION) => void;
}

const ChangeQuantityPanel = ({quantity, onChange}: Props) => {
  return (
    <View style={styles.quantityContainer}>
      {/** minus */}
      <IconButton
        name="minus"
        size={18}
        color="white"
        onPress={() => onChange(CHANGE_QUANTITY_ACTION.DECREMENT)}
        disabled={quantity === 1}
      />

      {/** quantity text */}
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

export default ChangeQuantityPanel;
