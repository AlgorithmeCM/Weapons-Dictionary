import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343b12',
  },
  image: {
    resizeMode: 'cover',
    height: 200,
    width: Dimensions.get('screen').width - 10,
    // width: '100%',
    margin: 5,
    borderRadius: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'justify',
    color: '#9c8f6f',
    margin: 10,
  },
});

export default styles;
