import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View, FlatList} from 'react-native';
import ProductItem from '../components/ProductItem';
import datas from '../mockData/datas';
import Lottie from 'lottie-react-native';
import styles from '../styles/products';
import images from '../resources/images';

function Products({route}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(datas.products[route.params.id]);
  }, []);

  const keyExtractor = useCallback(item => String(item.id), []);

  const renderItem = useCallback(({item, index}) => {
    return <ProductItem item={item} />;
  }, []);

  const listEmptyComponent = useMemo(() => {
    return (
      <View style={styles.emptyListContainer}>
        <Lottie
          style={styles.emptyIcon}
          source={images['empty-list']}
          autoPlay
          loop
        />
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
        renderItem={renderItem}
        onEndReachedThreshold={0.9}
        initialNumToRender={5}
        ListEmptyComponent={listEmptyComponent}
      />
    </View>
  );
}

export default Products;
