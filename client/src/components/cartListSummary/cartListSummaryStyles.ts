import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    marginBottom: 5,
  },

  // count
  countContainer: {
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

  // cost
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cost: {
    fontWeight: 'bold',
  },
});
