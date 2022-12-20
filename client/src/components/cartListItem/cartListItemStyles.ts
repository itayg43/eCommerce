import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
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

  // name, price
  nameAndPriceContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  price: {
    marginTop: 3,
  },

  // delete
  deleteBtnContainer: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 4,
  },
});
