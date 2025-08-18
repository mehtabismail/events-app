import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';

const CustomTextInput = props => {
  const { Layout, Gutters, Colors, Fonts, Images } = useTheme();
  const RIcon = props?.rightIcon ? Images.svg[props?.rightIcon].default : null;
  const LIcon = props?.leftIcon ? Images.svg[props?.leftIcon].default : null;
  return (
    <View style={[Gutters.gapVPadding]}>
      {props?.headingText && (
        <View style={[Gutters.tinyBMargin]}>
          <Text
            style={[
              Fonts.regularWeight,
              Fonts.nunito14,
              props.customHeadingTextStyle,
            ]}
          >
            {props?.headingText}
          </Text>
        </View>
      )}
      <View style={[Layout.row, Gutters.input]}>
        {props?.leftIcon && (
          <View
            style={[
              Gutters.tinyLMargin,
              {
                justifyContent: 'center',
              },
            ]}
          >
            <LIcon width={25} height={25} />
          </View>
        )}
        <TextInput
          {...props}
          placeholderTextColor={
            props?.placeholderTextColor
              ? props.placeholderTextColor
              : Colors.secondary
          }
          onChangeText={value => {
            props?.handleChangeInput(value, props?.fieldName);
          }}
          style={[
            Gutters.tinyHPadding,
            Fonts.PLUSJAKARTASANS_REGULAR_16,
            // Gutters.extraLightShadow,
            props.customStyle,
          ]}
        />
        {props?.rightIcon && (
          <View
            style={[
              {
                right: 40,
                justifyContent: 'center',
              },
            ]}
          >
            <RIcon width={25} height={35} />
          </View>
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;
