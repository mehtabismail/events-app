import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
const CustomHeader = ({
  rightIcon,
  leftIcon,
  centerIcon,
  centerText,
  rightInvertedX,
  leftInvertedX,
  onPressLeft,
  onPressRight,
  RightIconComponnet,
  customStyles,
  backButton,
  leftText,
  onBackPress,
}) => {
  const { Layout, Images, Gutters, Colors, Fonts } = useTheme();

  const navigation = useNavigation();

  const LIcon = leftIcon ? Images.svg[leftIcon].default : null;
  const CIcon = centerIcon ? Images.svg[centerIcon].default : null;
  const RIcon = rightIcon ? Images.svg[rightIcon].default : null;

  return (
    <View
      style={[
        Layout.row,
        Layout.justifyContentBetween,
        Layout.alignItemsCenter,
        Gutters.statusBarHeight,
        Gutters.tinyVPadding,
        { backgroundColor: Colors.primary, paddingHorizontal: '3%' },
        customStyles,
      ]}
    >
      <View style={[Layout.justifyContentStart, Layout.row, { width: '30%' }]}>
        {backButton ? (
          <TouchableOpacity
            style={[Gutters.littleVPadding]}
            onPress={() => {
              !!onBackPress ? onBackPress() : navigation.goBack();
            }}
          >
            <Images.svg.BackArrow.default />
          </TouchableOpacity>
        ) : leftText ? (
          <View>
            <Text
              style={[
                Fonts.nunito18,
                Fonts.semiboldWeight,
                { color: Colors.white },
              ]}
            >
              {leftText}
            </Text>
          </View>
        ) : (
          <>
            {leftIcon && (
              <TouchableOpacity
                onPress={() => onPressLeft && onPressLeft()}
                style={[leftInvertedX && Layout.invertedX]}
              >
                <LIcon />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
      <View style={[Layout.justifyContentCenter, Layout.row, { width: '40%' }]}>
        {centerIcon ? (
          <CIcon />
        ) : (
          centerText && (
            <Text
              style={[
                Fonts.nunito18,
                Fonts.semiboldWeight,
                { color: Colors.white, textAlign: 'center' },
              ]}
            >
              {centerText}
            </Text>
          )
        )}
      </View>
      {rightIcon || RightIconComponnet ? (
        <View style={[Layout.justifyContentEnd, Layout.row, { width: '30%' }]}>
          {RightIconComponnet ? (
            RightIconComponnet()
          ) : (
            <TouchableOpacity
              onPress={() => onPressRight && onPressRight()}
              style={[rightInvertedX && Layout.invertedX]}
            >
              <RIcon />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View
          style={[Layout.justifyContentEnd, Layout.row, { width: '30%' }]}
        ></View>
      )}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
