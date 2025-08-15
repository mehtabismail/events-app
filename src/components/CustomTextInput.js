import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {useTheme} from '@/hooks';

const CustomTextInput = props => {
  const {Layout, Gutters, Colors, Fonts} = useTheme();

  return (
    <View style={[Gutters.xTinyTMargin]}>
      {props?.headingText && (
        <View style={[Gutters.tinyBMargin]}>
          <Text
            style={[
              Fonts.regularWeight,
              Fonts.nunito14,
              props.customHeadingTextStyle,
            ]}>
            {props?.headingText}
          </Text>
        </View>
      )}
      <View>
        <TextInput
          {...props}
          placeholderTextColor={
            props?.placeholderTextColor
              ? props.placeholderTextColor
              : Colors.text
          }
          onChangeText={value => {
            props?.handleChangeInput(value, props?.fieldName);
          }}
          style={[
            Gutters.mediumHPadding,
            Gutters.input,
            Gutters.extraLightShadow,
            {borderWidth: 1, borderColor: Colors.border1},
            props.customStyle,
          ]}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;
