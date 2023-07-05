import React, {useEffect, useState, useRef} from 'react';
import {Image, View} from 'react-native';
import styles from '../styles/orders';
import CustomText from '../components/CustomText';
import datas from '../mockData/datas';
import images from '../resources/images';
import {useIsFocused} from '@react-navigation/native';

function Orders() {
  const [status, setStatus] = useState({status: '', icon: ''});
  const [statusCode, setStatusCode] = useState(0);
  const statusCoderef = useRef(0);
  const isFocused = useIsFocused();

  let checkStatusInterval, changeStatusInterval;

  useEffect(() => {
    clearInterval(changeStatusInterval);
    clearInterval(checkStatusInterval);
    setStatusCode(0);
    statusCoderef.current = 0;
  }, [isFocused]);

  useEffect(() => {
    CheckStatusOrder();
    ChangestatusAuto();

    return () => {
      clearInterval(changeStatusInterval);
      clearInterval(checkStatusInterval);
      setStatusCode(0);
      statusCoderef.current = 0;
    };
  }, []);

  useEffect(() => {
    SetStatusState();
  }, [statusCode]);

  const CheckStatusOrder = () => {
    checkStatusInterval = setInterval(() => {
      SetStatusState();
    }, 2000);
  };

  const ChangestatusAuto = () => {
    if (statusCode == 3) {
      clearInterval(changeStatusInterval);
      clearInterval(checkStatusInterval);
      return;
    }
    changeStatusInterval = setInterval(() => {
      if (statusCode < 3 && statusCoderef.current < 3) {
        setStatusCode(statusCode + 1);
        statusCoderef.current = statusCoderef.current + 1;
      }
    }, 10000);
  };

  const SetStatusState = () => {
    setStatus(datas.status[statusCoderef.current]);
  };

  return (
    <View style={styles.content}>
      <View style={styles.orderBox}>
        <View style={styles.statusBox}>
          <View style={styles.iconStatusBox}>
            <CustomText children={'Status:'} type={'small'} />
          </View>
          <View style={styles.status}>
            <Image
              source={status?.icon ? images[status.icon] : null}
              style={styles.icon}
            />
            <CustomText
              children={status?.status}
              customStyles={styles.orderStatus}
            />
          </View>
        </View>

        <View style={styles.statusBox}>
          <View style={styles.iconStatusBox}>
            <CustomText
              children={'Num-Order:'}
              type={'small'}
              customStyles={{}}
            />
          </View>
          <View style={styles.iconStatusText}>
            <CustomText children={datas.code} customStyles={styles.orderCode} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Orders;
