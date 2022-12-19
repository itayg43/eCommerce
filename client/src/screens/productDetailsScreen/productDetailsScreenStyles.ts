import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  closeBtnContainer: {
    position: 'absolute',
    top: 10,
    start: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 3,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  name: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    marginTop: 10,
  },
  description: {
    marginTop: 10,
  },
});
