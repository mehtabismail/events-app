import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import { mS } from '@/utils/functions';
import { useTheme } from '@/hooks';

const CustomTopTabList = ({ listData, setSelected }) => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
  const [selectedIndex, setselectedIndex] = useState(0);

  return (
    <View
      style={[
        {
          paddingHorizontal: mS(15),
          marginBottom: mS(10),
          borderBottomWidth: 1,
          borderBottomColor: '#D0E3E9',
        },
      ]}
    >
      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={listData}
        estimatedItemSize={10}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setselectedIndex(index);
                if (index == 0) {
                  setSelected('user');
                } else {
                  setSelected('eventplanner');
                }
              }}
              style={{
                paddingRight: mS(32),
              }}
            >
              <Text
                style={[
                  Fonts.PLUSJAKARTASANS_BOLD_14,
                  {
                    height: mS(40),
                    textAlignVertical: 'center',
                    textAlign: 'center', // optional for horizontal center

                    color:
                      index === selectedIndex ? Colors.text : Colors.secondary,
                    borderBottomWidth: 4,
                    borderBottomColor:
                      index === selectedIndex ? '#E5E8EB' : Colors.transparent,
                  },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CustomTopTabList;

const styles = StyleSheet.create({});
