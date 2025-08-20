import { View, Text } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { mS } from '@/utils/functions';
import { MetricsSizes } from '@/theme/Variables';
import { Fonts } from '@/theme';

const SingleActivity = ({ item }) => {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <FastImage
          source={item?.img}
          style={{ width: mS(56), height: mS(56), borderRadius: mS(28) }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View
          style={{
            paddingLeft: MetricsSizes.tiny,
            backgroundColor: 'red',
            justifyContent: 'center',
          }}
        >
          <Text style={[Fonts.PLUSJAKARTASANS_MEDIUM_16]}>{item?.name}</Text>
          <Text>{item?.activity_name}</Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: MetricsSizes.xLittle,
          paddingBottom: MetricsSizes.gap,
        }}
      >
        <Text>{item?.content}</Text>
      </View>
    </View>
  );
};

export default SingleActivity;
