import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // cart list
  cartListContainer: {
    flex: 0.9,
    marginTop: 10,
  },

  // summary
  summaryContainer: {
    flex: 0.1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    marginBottom: 5,
  },

  // amount of items
  amountOfItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    fontWeight: 'bold',
  },

  // divider
  divider: {
    marginVertical: 5,
  },

  // total cost
  totalCostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalCost: {
    fontWeight: 'bold',
  },
});
