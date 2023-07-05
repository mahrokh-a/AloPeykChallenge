import React, {useMemo} from 'react';
import {View, ScrollView} from 'react-native';
import Category from '../components/Category';
import datas from '../mockData/datas';
import styles from '../styles/categories';

function Categories() {
  let categoriesList = datas.categories;

  const categories = useMemo(() => {
    return categoriesList.map((item, index) => {
      return <Category key={item.id} item={item} index={index} />;
    });
  }, [categoriesList]);

  return (
    <ScrollView>
      <View style={styles.container}>{categories}</View>
    </ScrollView>
  );
}

export default Categories;
