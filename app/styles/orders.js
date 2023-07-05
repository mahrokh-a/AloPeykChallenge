import {StyleSheet} from 'react-native';
import colors from '../resources/colors';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
  },
  orderBox: {
    width: '90%',
    height: 110,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors['light-gray'],
  },
  statusBox: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
  },
  shadowBox: {
    shadowColor: colors.black,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  statusText: {
    height: 30,
    marginTop: 15,
    marginRight: 50,
  },
  iconStatusBox: {
    width: 62,
    height: 40,
    margin: 10,
    justifyContent: 'center',
  },
  iconStatusText: {
    width: 150,
    height: 40,
    marginTop: 10,
  },
  orderCode: {
    marginTop: 8,
  },
  orderStatus: {
    marginTop: 0,
    marginLeft: 8,
  },
  status: {
    width: 150,
    height: 40,
    marginTop: 20,
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default styles;
