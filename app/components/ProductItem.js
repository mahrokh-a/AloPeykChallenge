import React, {useCallback} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import styles from '../styles/productItem';
import CustomText from './CustomText';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {setOrderFunction, selectOrder} from '../redux/orderSlice';

function productItem({item}) {
  const navigation = useNavigation();
  const order = useSelector(selectOrder);
  const dispatch = useDispatch();

  const OnPressCategory = useCallback(() => {
    dispatch(setOrderFunction([item]));
    navigation.navigate('Pages', {screen: 'Location'});
  }, [item]);

  return (
    <View style={[styles.item, styles.shadowBox]}>
      <View style={styles.productItem}>
        <View style={styles.productImageBox}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
      </View>
      <View style={styles.productDetails}>
        <CustomText children={item.price} customStyles={styles.price} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buyButton}
          onPress={OnPressCategory}>
          <CustomText
            children={'Buy'}
            customStyles={styles.text}
            type={'small'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default productItem;
