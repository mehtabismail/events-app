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

const CustomNotificationList = () => {
  const { Layout, Gutters, Fonts, Colors } = useTheme();
  const [sectionData, setSectionData] = useState(null);

  function groupedDays(messages) {
    return messages.reduce((acc, el) => {
      const messageDay = dayjs(el?.date).format('YYYY-MM-DD');
      if (acc[messageDay]) {
        return { ...acc, [messageDay]: acc[messageDay].concat([el]) };
      }
      return { ...acc, [messageDay]: [el] };
    }, {});
  }

  useEffect(() => {
    var arr = [];
    if (notification_data) {
      notification_data.map(doc => {
        arr = [...arr, doc];
      });
      const arr2 = groupedDays(arr);
      const sections = Object.keys(arr2).map(date => ({
        title: date,
        data: arr2[date],
      }));
      setSectionData(sections);
    }
    return () => {};
  }, []);

  return (
    <View style={[Layout.fill]}>
      <View style={[Layout.fill]}>
        {sectionData && (
          <SectionList
            showsVerticalScrollIndicator={false}
            sections={sectionData}
            stickySectionHeadersEnabled={false}
            contentContainerStyle={[
              Layout.screenWidth,
              Layout.selfCenter,
              Layout.grow,
              { backgroundColor: Colors.background },
            ]}
            renderItem={({ item }) => {
              return (
                <View
                  style={[
                    Layout.fullWidth,
                    Gutters.smallRadius,
                    Gutters.lightShadow,
                    Gutters.smallTMargin,
                    item?.last && Gutters.largeBMargin,
                    { backgroundColor: Colors.grey1 },
                  ]}
                >
                  <View
                    style={[
                      Layout.screenWidth,
                      Layout.selfCenter,
                      Gutters.smallVPadding,
                    ]}
                  >
                    <Text style={[Fonts.nunito16, Fonts.semiboldWeight]}>
                      {item?.title}
                    </Text>
                    <Text
                      style={[
                        Fonts.nunito14,
                        Fonts.regularWeight,
                        Gutters.tinyTMargin,
                      ]}
                    >
                      {item?.body}
                    </Text>
                  </View>
                </View>
              );
            }}
            renderSectionHeader={({ section: { title } }) => {
              return (
                <View
                  style={[
                    Layout.fullWidth,
                    Layout.row,
                    Layout.justifyContentBetween,
                    Gutters.smallTMargin,
                  ]}
                >
                  <Text style={[Fonts.nunito14, Fonts.regualarWeight]}>
                    {title == dayjs(new Date()).format('YYYY-MM-DD')
                      ? 'Today'
                      : dayjs(title).format('YYYY-MM-DD') ==
                        dayjs(new Date()).add(-1, 'd').format('YYYY-MM-DD')
                      ? 'Yesterday'
                      : dayjs(title).format('MMM DD, YY')}
                  </Text>
                  {title == dayjs(new Date()).format('YYYY-MM-DD') && (
                    <TouchableOpacity>
                      <Text
                        style={[
                          Fonts.nunito14,
                          Fonts.regualarWeight,
                          { color: Colors.primary },
                        ]}
                      >
                        Mark all as read
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default CustomNotificationList;
