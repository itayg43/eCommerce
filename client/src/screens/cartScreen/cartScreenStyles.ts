import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // cart list
  cartListContainer: {
    flex: 0.9,
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
  itemsCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  count: {
    fontWeight: 'bold',
  },

  // divider
  divider: {
    marginVertical: 5,
  },

  // total cost
  itemsCostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cost: {
    fontWeight: 'bold',
  },
});
