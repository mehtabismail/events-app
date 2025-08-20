import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import { CustomHeader, CustomTopTabList, ScreenWrapper } from '@/components';
import { mS } from '@/utils/functions';
import { FlashList } from '@shopify/flash-list';
import { manage_events_list } from '@/constants/dummyData';
import FastImage from 'react-native-fast-image';
import dayjs from 'dayjs';

const CreateEventContainer = () => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const RenderItem = ({ item }) => {
    return (
      <View style={[Layout.row, Gutters.tinyVPadding]}>
        <FastImage
          style={{ width: mS(56), height: mS(56), borderRadius: mS(8) }}
          source={item?.img}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={[Gutters.xTinyLPadding, Layout.justifyContentCenter]}>
          <Text numberOfLines={1} style={[Fonts.PLUSJAKARTASANS_MEDIUM_16]}>
            {item?.title}
          </Text>
          <Text numberOfLines={1} style={[Fonts.PLUSJAKARTASANS_REGULAR_14]}>
            {dayjs(new Date()).format('ddd, MMM D · h:mm A')}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={[Layout.fill, { backgroundColor: Colors.background }]}>
      <View style={{ paddingHorizontal: mS(15) }}>
        <CustomHeader backButton centerText={'Manage Events'} />
      </View>
      <CustomTopTabList
        listData={manage_events_list}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ScreenWrapper>
        <FlashList
          data={[
            {
              img: require('@/theme/assets/images/events1.png'),
              title: 'Summer Music Festival',
            },
            {
              img: require('@/theme/assets/images/events2.png'),
              title: 'Indie Rock Night',
            },
          ]}
          renderItem={RenderItem}
        />
        <TouchableOpacity
          style={[
            Layout.row,
            Gutters.tinyRPadding,
            {
              height: mS(56),
              width: mS(180),
              borderRadius: mS(28),
              backgroundColor: Colors.primary,
              position: 'absolute',
              bottom: mS(20),
              right: mS(15),
              alignItems: 'center',
              justifyContent: 'space-evenly',
            },
          ]}
        >
          <Images.svg.Plus.default />
          <Text style={[Fonts.PLUSJAKARTASANS_BOLD_16]}>Create Event</Text>
        </TouchableOpacity>
      </ScreenWrapper>
    </View>
  );
};

export default CreateEventContainer;
