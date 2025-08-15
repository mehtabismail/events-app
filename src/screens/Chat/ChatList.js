import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { FlashList } from '@shopify/flash-list';

const ChatList = ({ type }) => {
  const { Layout, Gutters, Fonts, Colors } = useTheme();

  const RenderItem = ({ item, index }) => {
    return <></>;
    // return (
    //   <TouchableOpacity
    //     key={index}
    //     activeOpacity={0.8}
    //     style={[Layout.row, Gutters.xTinyBMargin]}
    //   >
    //     <View>
    //       <Image
    //         source={item.image}
    //         style={[{ height: 52, width: 52, borderRadius: 52 / 2 }]}
    //       />
    //     </View>
    //     <View style={[Layout.fill, Gutters.tinyLMargin]}>
    //       <View
    //         style={[
    //           Layout.justifyContentBetween,
    //           Layout.row,
    //           Layout.fill,
    //           Layout.alignItemsCenter,
    //         ]}
    //       >
    //         <Text
    //           style={[
    //             Gutters.littleBMargin,
    //             Fonts.nunito14,
    //             Fonts.semiboldWeight,
    //           ]}
    //         >
    //           {item?.name}
    //         </Text>
    //         <Text
    //           style={[
    //             Gutters.littleBMargin,
    //             Fonts.nunito10,
    //             Fonts.regularWeight,
    //             { color: Colors.text_5A6F82 },
    //           ]}
    //         >
    //           {item?.last_message_time + 'min ago'}
    //         </Text>
    //       </View>

    //       <View style={[Layout.justifyContentBetween, Layout.row, Layout.fill]}>
    //         <Text style={[Fonts.nunito12, Fonts.regularWeight]}>
    //           {item?.message}
    //         </Text>
    //         {item?.count && (
    //           <View
    //             style={[
    //               Layout.center,
    //               {
    //                 height: 22,
    //                 width: 22,
    //                 borderRadius: 22 / 2,
    //                 marginTop: -5,
    //                 backgroundColor: Colors.primary,
    //               },
    //             ]}
    //           >
    //             <Text
    //               style={[
    //                 Fonts.nunito10,
    //                 Fonts.regularWeight,
    //                 { color: Colors.white },
    //               ]}
    //             >
    //               {item?.count}
    //             </Text>
    //           </View>
    //         )}
    //       </View>
    //     </View>
    //   </TouchableOpacity>
    // );
  };
  return (
    <View style={[Layout.fill]}>
      <FlashList
        renderItem={RenderItem}
        estimatedItemSize={50}
        data={type == 'official_messages' ? [] : []}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ChatList;
