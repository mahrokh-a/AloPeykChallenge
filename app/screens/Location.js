import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {View, PermissionsAndroid, TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import CustomText from '../components/CustomText';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/location';

function Location() {
  const navigation = useNavigation();
  const [regionLocation, setRegionLocation] = useState({});

  const onRegionChange = region => {
    setRegionLocation(region);
  };

  useEffect(() => {
    (async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(position => {
            const region = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            };
            setRegionLocation(region);
          });
        } else {
          alert('Permission denied!');
        }
      } catch (err) {
        console.warn(err);
      }
    })();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {!!regionLocation.latitude && !!regionLocation.longitude && (
          <MapView
            style={{...styles.map, marginTop: 10}}
            initialRegion={regionLocation}
            showsUserLocation={true}
            onRegionChangeComplete={onRegionChange}
            zoomEnabled={true}
            zoomControlEnabled={true}>
            <Marker
              onPress={() => navigation.navigate('Main', {screen: 'Order'})}
              coordinate={{
                latitude: regionLocation.latitude,
                longitude: regionLocation.longitude,
              }}
              title={'Your Location'}
              draggable
            />
          </MapView>
        )}
      </View>
      <View style={styles.deatilSection}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            title="PICK THIS LOCATION"
            onPress={() => navigation.navigate('Main', {screen: 'Order'})}>
            <CustomText
              children={'PICK THIS LOCATION'}
              customStyles={styles.textBtn}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Location;
