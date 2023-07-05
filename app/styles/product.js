import {Dimensions, StyleSheet} from 'react-native';
import colors from '../resources/colors';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productContainer: {
    height: width / 2 - 40,
    width: '50%',
    marginTop: 8,
    justifyContent: 'center',
    marginBottom: 10,
  },
  shadowBox: {
    shadowColor: colors.black,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  item: {
    height: width / 2 - 40,
    width: '80%',
    borderRadius: 10,
    backgroundColor: colors['light-skyblue'],
    marginHorizontal: 8,
  },
  categoryImageBox: {
    height: 65,
    width: 65,
    borderRadius: 100,
    backgroundColor: colors['skyblue'],
    margin: 9,
  },
  categoryTextBox: {
    height: 30,
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textName: {
    color: colors.white,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.8,
    borderRadius: 100,
    overflow: 'hidden',
  },
});

export default styles;
