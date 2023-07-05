import React from 'react';
import {Text} from 'react-native';

const CustomText = ({children, customStyles, type, numberOfLines}) => {
  const font_size = 15;
  let main_text = children;

  let text = (
    <Text
      numberOfLines={numberOfLines ? numberOfLines : null}
      style={[customStyles, {fontSize: font_size}]}>
      {main_text}
    </Text>
  );
  if (type && type == 'small')
    text = (
      <Text
        numberOfLines={numberOfLines ? numberOfLines : null}
        style={[customStyles, {fontSize: font_size - 4}]}>
        {main_text}
      </Text>
    );
  else if (type && type == 'medium')
    text = (
      <Text
        numberOfLines={numberOfLines ? numberOfLines : null}
        style={[customStyles, {fontSize: font_size + 2}]}>
        {main_text}
      </Text>
    );
  else if (type && type == 'large')
    text = (
      <Text
        numberOfLines={numberOfLines ? numberOfLines : null}
        style={[customStyles, {fontSize: font_size + 4}]}>
        {main_text}
      </Text>
    );
  return text;
};

export default CustomText;
