import {
  View,
  Text,
  TouchableOpacity,
  SectionList,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { notification_data } from '@/constants/dummyData';
import { useTheme } from '@/hooks';
import dayjs from 'dayjs';
import { FlashList } from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';
import { mS } from '@/utils/functions';

const CustomNotificationList = () => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();

  const RenderItem = ({ item }) => {
    console.log(item);
    return (
      <View style={[Layout.row, Gutters.tinyVPadding]}>
        <FastImage
          style={{ width: mS(56), height: mS(56), borderRadius: mS(28) }}
          source={Images.png.Logo}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={[Gutters.xTinyLPadding, Layout.justifyContentCenter]}>
          <Text numberOfLines={1} style={[Fonts.PLUSJAKARTASANS_MEDIUM_16]}>
            Notification Title
          </Text>
          <Text numberOfLines={1} style={[Fonts.PLUSJAKARTASANS_REGULAR_14]}>
            Notification body text
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={[Layout.fill]}>
      <FlashList
        data={notification_data}
        renderItem={RenderItem}
        estimatedItemSize={50}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CustomNotificationList;
