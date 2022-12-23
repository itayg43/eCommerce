import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    marginBottom: 5,
  },

  // image
  imageContainer: {
    marginEnd: 10,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: 60,
    height: 60,
  },

  // name, price, quantity
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  price: {
    marginTop: 3,
  },
  quantity: {
    marginTop: 3,
  },

  // delete
  deleteBtn: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 4,
  },
});
