import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  CustomHeader,
  ScreenWrapper,
  CustomButton,
  CustomRow,
  CustomIconBox,
} from '@/components';
import { useTheme } from '@/hooks';
import { mS } from '@/utils/functions';
import FastImage from 'react-native-fast-image';
import { navigationRef } from '@/navigators/utils';

const EventDetailContainer = () => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
  const [interested, setInterested] = useState(false);

  return (
    <View style={[Layout.fill, { backgroundColor: Colors.background }]}>
      <View style={[{ paddingHorizontal: mS(15) }]}>
        <CustomHeader backButton />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Main Event Image */}
        <FastImage
          source={Images.png.EventDetail}
          style={{
            width: '100%',
            height: mS(218),
            marginBottom: mS(16),
          }}
          resizeMode="cover"
        />
        <ScreenWrapper>
          {/* Event Card */}
          <View
            style={[Layout.row, Gutters.gapBMargin, { alignItems: 'center' }]}
          >
            <Image
              source={require('@/theme/assets/images/events1.png')}
              style={{
                width: mS(96),
                height: mS(96),
                borderRadius: mS(12),
                marginRight: mS(12),
              }}
              resizeMode="cover"
            />
            <View style={{ flex: 1 }}>
              <Text
                style={[Fonts.PLUSJAKARTASANS_BOLD_22, { marginBottom: mS(2) }]}
              >
                Electric Beats Festival
              </Text>
              <Text
                style={[
                  Fonts.PLUSJAKARTASANS_REGULAR_16,
                  { color: Colors.secondary },
                ]}
              >
                Central Park · New York, NY
              </Text>
              <Text
                style={[
                  Fonts.PLUSJAKARTASANS_REGULAR_16,
                  { color: Colors.secondary },
                ]}
              >
                Saturday, July 15, 2023 · 5:00 PM
              </Text>
            </View>
          </View>
          {/* Buttons */}
          <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              Gutters.gapBMargin,
            ]}
          >
            <CustomButton
              btnText={'Interested'}
              onPress={() => {}}
              customStyle={{
                backgroundColor: Colors.secondary_background,
                width: '48%',
                height: mS(40),
              }}
              customTextStyle={{
                ...Fonts.PLUSJAKARTASANS_BOLD_14,
                color: Colors.text,
              }}
            />
            <CustomButton
              btnText="Buy Ticket"
              onPress={() => {}}
              customStyle={{
                backgroundColor: Colors.primary,
                width: '48%',
                height: mS(40),
              }}
              customTextStyle={{
                ...Fonts.PLUSJAKARTASANS_BOLD_16,
                color: Colors.white,
              }}
            />
          </View>
          {/* Event Info */}
          <View style={[Gutters.gapBMargin]}>
            <CustomRow
              title="Central Park, New York, NY"
              icon={<Images.svg.Location.default />}
              onPress={() => {}}
              customBoxStyle={{
                width: mS(40),
                height: mS(40),
                borderRadius: mS(8),
                backgroundColor: Colors.secondary_background,
              }}
              customTitleStyle={{ ...Fonts.PLUSJAKARTASANS_REGULAR_16 }}
              gap={{ paddingVertical: mS(8) }}
            />
            <CustomRow
              title="120 going · 500 interested"
              icon={<Images.svg.Calender.default fill={Colors.text} />}
              onPress={() => {}}
              customBoxStyle={{
                width: mS(40),
                height: mS(40),
                borderRadius: mS(8),
                backgroundColor: Colors.secondary_background,
              }}
              customTitleStyle={{ ...Fonts.PLUSJAKARTASANS_REGULAR_16 }}
              gap={{ paddingVertical: mS(8) }}
            />
            <CustomRow
              title="Tickets: $49"
              icon={<Images.svg.Ticket.default fill={Colors.text} />}
              onPress={() => {}}
              customBoxStyle={{
                width: mS(40),
                height: mS(40),
                borderRadius: mS(8),
                backgroundColor: Colors.secondary_background,
              }}
              customTitleStyle={{ ...Fonts.PLUSJAKARTASANS_REGULAR_16 }}
              gap={{ paddingVertical: mS(8) }}
            />
          </View>
          {/* What to expect */}
          <View style={[Gutters.xTinyBMargin]}>
            <Text
              style={[Fonts.PLUSJAKARTASANS_BOLD_18, { marginBottom: mS(5) }]}
            >
              What to expect
            </Text>
            <Text
              style={[
                Fonts.PLUSJAKARTASANS_REGULAR_14,
                { color: Colors.secondary },
              ]}
            >
              Saturday, July 15. Central Park presents Electric Beats Festival.
              18+ Event. Doors open at 5PM.
            </Text>
          </View>
          {/* About the Venue */}
          <View style={[Gutters.gapBMargin]}>
            <Text style={[Fonts.PLUSJAKARTASANS_BOLD_18, Gutters.tinyBMargin]}>
              About the Venue
            </Text>
            <FastImage
              source={Images.png.Map}
              style={{ width: '100%', height: mS(200), borderRadius: mS(12) }}
              resizeMode="cover"
            />
          </View>

          {/* Bottom Bar */}
          <View
            style={[
              Layout.row,
              Layout.justifyContentEvenly,
              Gutters.gapVMargin,
            ]}
          >
            <CustomIconBox circle={true} count={120}>
              <Images.svg.Like.default
                width={mS(24)}
                height={mS(24)}
                fill={Colors.text}
              />
            </CustomIconBox>
            <CustomIconBox circle={true} count={500}>
              <Images.svg.Users.default width={mS(24)} height={mS(24)} />
            </CustomIconBox>
            <TouchableOpacity
              onPress={() => navigationRef.navigate('CommentsContainer')}
            >
              <CustomIconBox circle={true} count={30}>
                <Images.svg.Comment.default
                  width={mS(24)}
                  height={mS(24)}
                  fill={Colors.text}
                />
              </CustomIconBox>
            </TouchableOpacity>
            <CustomIconBox circle={true} count={'1.2k'}>
              <Images.svg.Eye.default width={mS(24)} height={mS(24)} />
            </CustomIconBox>
          </View>
        </ScreenWrapper>
      </ScrollView>
    </View>
  );
};

export default EventDetailContainer;
