import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { CustomHeader, CustomTextInput, ScreenWrapper } from '@/components';
import { useDispatch } from 'react-redux';
import { useTheme } from '@/hooks';
import { FlashList } from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';
import { mS } from '@/utils/functions';
import { all_comments, top_comments } from '@/constants/dummyData';

const CommentsContainer = () => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
  const dispatch = useDispatch();

  const SectionTitle = ({ title }) => (
    <Text
      style={[
        Fonts.PLUSJAKARTASANS_BOLD_18,
        Gutters.smallTMargin,
        Gutters.tinyBMargin,
      ]}
    >
      {title}
    </Text>
  );
  const RenderItem2 = ({ item }) => {
    console.log('calling render 2 item');
    return (
      <View style={[{ height: 200, width: 200, backgroundColor: 'red' }]}>
        <Text>Render 2</Text>
      </View>
    );
  };
  const RenderItem = ({ item }) => {
    return (
      <View>
        <View
          style={[
            Gutters.gapVPadding,
            Layout.row,
            item?.child == true && { width: '90%', alignSelf: 'flex-end' },
          ]}
        >
          <FastImage
            source={item?.img}
            style={{ width: mS(40), height: mS(40), borderRadius: mS(20) }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={[Gutters.tinyLPadding, { width: '90%' }]}>
            <View style={[Layout.row, { paddingBottom: mS(2) }]}>
              <Text
                style={[
                  Fonts.PLUSJAKARTASANS_BOLD_14,
                  Gutters.tinyRPadding,
                  { color: Colors.text },
                ]}
              >
                {item?.name}
              </Text>
              <Text style={[Fonts.PLUSJAKARTASANS_REGULAR_14]}>
                {item?.comment_time}
              </Text>
            </View>
            <Text
              style={[Fonts.PLUSJAKARTASANS_Regular_14, Gutters.tinyBMargin]}
            >
              {item?.content}
            </Text>
            <View style={[Layout.row]}>
              <Images.svg.ThumbsUp.default />
              <Text
                style={[Fonts.PLUSJAKARTASANS_REGULAR_14, Gutters.tinyLPadding]}
              >
                {item?.like}
              </Text>
              {!item?.child && (
                <TouchableOpacity style={[Gutters.xTinyHPadding]}>
                  <Text
                    style={[
                      Fonts.PLUSJAKARTASANS_REGULAR_14,
                      { color: Colors.text },
                    ]}
                  >
                    Reply
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        {!!item?.replies && (
          <View>
            <FlashList data={item?.replies} renderItem={RenderItem} />
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={[Layout.fill, { paddingHorizontal: mS(15) }]}>
      <CustomHeader backButton centerText={'Comments'} />
      <ScrollView style={[Layout.fill]} showsVerticalScrollIndicator={false}>
        <SectionTitle title="Top comments" />
        <FlashList data={top_comments} renderItem={RenderItem} />
        <SectionTitle title="All comments" />
        <FlashList data={all_comments} renderItem={RenderItem} />
        <View style={[Layout.row, { position: 'absolute', bottom: 0 }]}></View>
      </ScrollView>
      <View style={[Layout.row, { backgroundColor: 'Colors.background' }]}>
        <View style={[Layout.justifyContentCenter, { width: '15%' }]}>
          <FastImage
            source={require('@/theme/assets/images/comment_image.png')}
            style={{ width: mS(40), height: mS(40), borderRadius: mS(20) }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={[Layout.fill]}>
          <CustomTextInput
            placeholder="Add Comment"
            // headingText="Password"
            handleChangeInput={text => console.log(text)}
          />
        </View>
      </View>
    </View>
  );
};

export default CommentsContainer;
