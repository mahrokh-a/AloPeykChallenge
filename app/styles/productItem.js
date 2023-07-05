import {StyleSheet} from 'react-native';
import colors from '../resources/colors';

const styles = StyleSheet.create({
  shadowBox: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  item: {
    height: 120,
    width: '90%',
    marginLeft: '5%',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buyButton: {
    width: 100,
    height: 30,
    borderRadius: 5,
    backgroundColor: colors['light-skyblue'],
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
  },
  productItem: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productDetails: {
    width: '70%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  productImageBox: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  price: {
    lineHeight: 35,
    marginRight: 40,
  },
});

export default styles;
