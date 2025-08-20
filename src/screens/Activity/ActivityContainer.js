import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { CustomHeader, ScreenWrapper } from '@/components';
import { useTheme } from '@/hooks';
import { FlashList } from '@shopify/flash-list';
import SingleActivity from './SingleActivity';
import FastImage from 'react-native-fast-image';
import { mS } from '@/utils/functions';
import { MetricsSizes } from '@/theme/Variables';
import { Fonts } from '@/theme';
import dayjs from 'dayjs';
import { navigationRef } from '@/navigators/utils';
import { activities_data } from '@/constants/dummyData';

const ActivityContainer = () => {
  const { Layout, Fonts, Gutters, Images, Colors } = useTheme();
  const RenderItem = ({ item }) => {
    return (
      <View style={[Gutters.xTinyBMargin]}>
        <View style={{ flexDirection: 'row' }}>
          <FastImage
            source={item?.img}
            style={{ width: mS(56), height: mS(56), borderRadius: mS(28) }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View
            style={{
              paddingLeft: MetricsSizes.tiny,
              justifyContent: 'center',
            }}
          >
            <Text style={[Fonts.PLUSJAKARTASANS_MEDIUM_16]}>{item?.name}</Text>
            <Text style={[Fonts.PLUSJAKARTASANS_REGULAR_14]}>
              {item?.activity_name}
            </Text>
          </View>
        </View>
        <View style={[Gutters.xLittleTPadding, Gutters.gapBPadding]}>
          <Text style={[Fonts.PLUSJAKARTASANS_REGULAR_16]}>
            {item?.content}
          </Text>
        </View>
        <View
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            Gutters.xTinyVPadding,
          ]}
        >
          <View>
            <Text style={[Fonts.PLUSJAKARTASANS_REGULAR_14]}>{item?.type}</Text>
            <Text
              style={[Fonts.PLUSJAKARTASANS_BOLD_16, { color: Colors.text }]}
            >
              {item?.activity_name}
            </Text>
            <Text style={[Fonts.PLUSJAKARTASANS_REGULAR_14]}>
              {dayjs(item?.date).format('ddd, MMM D · h:mm A')}
            </Text>
          </View>
          <FastImage
            source={item?.activity_image}
            style={{ width: mS(130), height: mS(70), borderRadius: mS(12) }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={[Layout.row]}>
          <View style={[Layout.row, Gutters.mediumRPadding]}>
            <Images.svg.Like.default
              width={mS(24)}
              height={mS(24)}
              fill={Colors.secondary}
            />
            <Text
              style={[
                Fonts.PLUSJAKARTASANS_BOLD_13,
                Gutters.tinyLPadding,
                { color: Colors.secondary },
              ]}
            >
              {item?.likes}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigationRef.navigate('CommentsContainer')}
            style={[Layout.row, Layout.justifyContentCenter]}
          >
            <Images.svg.Comment.default
              width={mS(24)}
              height={mS(24)}
              fill={Colors.secondary}
            />
            <Text
              style={[
                Fonts.PLUSJAKARTASANS_BOLD_13,
                Gutters.tinyLPadding,
                { color: Colors.secondary },
              ]}
            >
              {item?.comments}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <ScreenWrapper>
      <CustomHeader centerText={'Activity'} />
      <View style={[Layout.fill]}>
        <FlatList data={activities_data} renderItem={RenderItem} />
      </View>
    </ScreenWrapper>
  );
};

export default ActivityContainer;
