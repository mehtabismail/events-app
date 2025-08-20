import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  CustomButton,
  ScreenWrapper,
  CustomHeader,
  CustomTopTabList,
  CustomTextInput,
} from '@/components';
import { logout } from '@/store/auth/AuthSlice';
import { persistor } from '@/store/store';
import { useDispatch } from 'react-redux';
import { useTheme } from '@/hooks';
import { mS } from '@/utils/functions';
import { FlashList } from '@shopify/flash-list';
import { manage_home_list } from '@/constants/dummyData';
import FastImage from 'react-native-fast-image';
import dayjs from 'dayjs';
import { navigationRef } from '@/navigators/utils';

const HomeContainer = () => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();

  const [searchInput, setSearchInput] = useState('');
  const [searchToggle, setSearchToggle] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeInput = props => {
    setSearchInput(props);
  };

  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigationRef.navigate('EventDetailContainer', item)}
        style={[Gutters.tinyVPadding]}
      >
        <FastImage
          style={[
            Gutters.littleVMargin,
            { width: '100%', height: mS(200), borderRadius: mS(8) },
          ]}
          source={item?.img}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={[Layout.justifyContentCenter]}>
          <Text
            numberOfLines={1}
            style={[Gutters.littleVMargin, Fonts.PLUSJAKARTASANS_BOLD_18]}
          >
            {item?.title}
          </Text>
          <Text
            numberOfLines={1}
            style={[Gutters.littleBMargin, Fonts.PLUSJAKARTASANS_REGULAR_14]}
          >
            {item?.locatioAndDay}
          </Text>
          <Text
            numberOfLines={1}
            style={[Gutters.littleBMargin, Fonts.PLUSJAKARTASANS_REGULAR_14]}
          >
            {item?.going}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={[Layout.fill, { backgroundColor: Colors.background }]}>
      <View style={{ paddingHorizontal: mS(15) }}>
        <CustomHeader
          centerText={'Home'}
          rightIcon="HeaderSearch"
          onPressRight={() => setSearchToggle(s => !s)}
        />
      </View>
      {searchToggle && (
        <View
          style={[
            {
              paddingHorizontal: mS(10),
              marginBottom: mS(10),
            },
          ]}
        >
          <CustomTextInput
            placeholder="Search Events"
            // headingText="Password"
            handleChangeInput={handleChangeInput}
            leftIcon={'HomeSearch'}
          />
        </View>
      )}

      <CustomTopTabList
        listData={manage_home_list}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ScreenWrapper>
        <FlashList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={[
            {
              img: require('@/theme/assets/images/user-home-img-1.png'),

              title: 'Tech Conference 2024',
              locatioAndDay:
                'San Francisco, CA · ' + dayjs(new Date()).format('MMM D'),
              going: '1.2k going',
            },
            {
              img: require('@/theme/assets/images/user-home-img-2.png'),
              title: 'Indie Music Festival',
              locatioAndDay:
                'Los Angeles, CA · ' + dayjs(new Date()).format('MMM D'),
              going: '800 going',
            },
            {
              img: require('@/theme/assets/images/user-home-img-3.png'),

              title: 'Art Exhibition',
              locatioAndDay:
                'New York, NY · ' + dayjs(new Date()).format('MMM D'),
              going: '500 going',
            },
          ]}
          renderItem={RenderItem}
        />
      </ScreenWrapper>
    </View>
  );
};

export default HomeContainer;
