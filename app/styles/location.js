import {StyleSheet} from 'react-native';
import colors from '../resources/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  btnContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: colors['red'],
    borderRadius: 10,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: colors,
  },
});

export default styles;
