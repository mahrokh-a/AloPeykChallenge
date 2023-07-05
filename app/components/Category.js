import React, { useCallback } from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from '../styles/product';
import CustomText from './CustomText';
import {useNavigation} from '@react-navigation/native';

function Category({item, index}) {
  const navigation = useNavigation();

  const OnPressCategory = useCallback (() => {
        navigation.navigate('Pages', {
        screen: 'Products',
        params: {id: item.id, productTitle: item.category},
      })
  }, [item])

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={OnPressCategory}
      style={[
        styles.productContainer,
        {alignItems: index % 2 != 0 ? 'flex-start' : 'flex-end'},
      ]}>
      <View style={[styles.item, styles.shadowBox]}>
        <View style={styles.categoryImageBox}>
          <Image source={{uri: item.image}} style={styles.categoryImage} />
        </View>
        <View style={styles.categoryTextBox}>
          <CustomText children={item.category} customStyles={styles.textName} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Category;
