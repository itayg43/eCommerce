import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  // image
  imageContainer: {
    flex: 0.4,
  },
  image: {
    width: '100%',
    height: '100%',
  },

  // close btn
  closeBtnContainer: {
    position: 'absolute',
    top: 10,
    start: 10,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 2,
  },

  // details
  detailsContainer: {
    flex: 0.5,
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    marginTop: 10,
  },
  description: {
    marginTop: 10,
  },

  // add to cart btn
  addToCartBtnContainer: {
    flex: 0.1,
    padding: 10,
  },
  addToCartBtn: {
    backgroundColor: 'black',
    borderRadius: 4,
  },
});
