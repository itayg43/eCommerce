import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 5,
  },

  // image
  image: {
    width: '100%',
    height: 200,
  },

  // details
  detailsContainer: {
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    marginTop: 5,
  },
  description: {
    marginTop: 5,
  },
});
