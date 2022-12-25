import React from 'react';

import {useAppSelector} from '../../hooks';
import {selectItemsCount} from '../../redux/cart/selectors';
import {
  Layout,
  CartList,
  CartListSummary,
  CartListPlaceholder,
} from '../../components';

const CartScreen = () => {
  const itemsCount = useAppSelector(selectItemsCount);

  return (
    <Layout>
      {itemsCount === 0 && <CartListPlaceholder />}
      {itemsCount > 0 && (
        <>
          <CartList />
          <CartListSummary />
        </>
      )}
    </Layout>
  );
};

export default CartScreen;
