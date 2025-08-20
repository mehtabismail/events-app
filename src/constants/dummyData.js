// export const chats_data_large = [
//   {
//     name: 'Wade Warren',
//     message: 'How are you today?',
//     image: require('../theme/assets/images/img1.png'),
//     count: 3,
//     last_message_time: 2,
//   },
//   {
//     name: 'Aurlene MacCoy',
//     message: 'Did you get the transfer?',
//     image: require('../theme/assets/images/img2.png'),
//     count: 1,
//     last_message_time: 3,
//   },
//   {
//     name: 'Cody Fisher',
//     message: 'Hey! Can you join the meeting?',
//     image: require('../theme/assets/images/img3.png'),
//     last_message_time: 4,
//   },
//   {
//     name: 'Ronald Richards',
//     message: 'How are you today',
//     image: require('../theme/assets/images/img4.png'),
//     last_message_time: 4,
//   },
//   {
//     name: 'Wade Warren',
//     message: 'How are you today?',
//     image: require('../theme/assets/images/img1.png'),
//     count: 3,
//     last_message_time: 2,
//   },
//   {
//     name: 'Aurlene MacCoy',
//     message: 'Did you get the transfer?',
//     image: require('../theme/assets/images/img2.png'),
//     count: 1,
//     last_message_time: 3,
//   },
//   {
//     name: 'Cody Fisher',
//     message: 'Hey! Can you join the meeting?',
//     image: require('../theme/assets/images/img3.png'),
//     last_message_time: 4,
//   },
//   {
//     name: 'Ronald Richards',
//     message: 'How are you today',
//     image: require('../theme/assets/images/img4.png'),
//     last_message_time: 4,
//   },
//   {
//     name: 'Wade Warren',
//     message: 'How are you today?',
//     image: require('../theme/assets/images/img1.png'),
//     count: 3,
//     last_message_time: 2,
//   },
//   {
//     name: 'Aurlene MacCoy',
//     message: 'Did you get the transfer?',
//     image: require('../theme/assets/images/img2.png'),
//     count: 1,
//     last_message_time: 3,
//   },
//   {
//     name: 'Cody Fisher',
//     message: 'Hey! Can you join the meeting?',
//     image: require('../theme/assets/images/img3.png'),
//     last_message_time: 4,
//   },
//   {
//     name: 'Ronald Richards',
//     message: 'How are you today',
//     image: require('../theme/assets/images/img4.png'),
//     last_message_time: 4,
//   },
// ];

var d = new Date();

export const notification_data = [
  {
    title: 'New Booking',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(),
  },
  {
    title: 'New Message',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(),
  },
  {
    title: 'Appointment Coming',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(),
  },
  {
    title: 'New Booking',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(d.setDate(d.getDate() - 1)),
  },
  {
    title: 'New Message',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(d.setDate(d.getDate() - 1)),
  },
  {
    title: 'Appointment Coming',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(d.setDate(d.getDate() - 1)),
  },
  {
    title: 'New Booking',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(d.setDate(d.getDate() - 1)),
  },
  {
    title: 'New Message',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(d.setDate(d.getDate() - 1)),
  },
  {
    title: 'Appointment Coming',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(d.setDate(d.getDate() - 1)),
    last: true,
  },
  {
    title: 'New Booking',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(),
  },
  {
    title: 'New Message',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(),
  },
  {
    title: 'Appointment Coming',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(),
  },
  {
    title: 'New Booking',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(d.setDate(d.getDate() - 1)),
  },
  {
    title: 'New Message',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(d.setDate(d.getDate() - 1)),
  },
  {
    title: 'Appointment Coming',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(d.setDate(d.getDate() - 1)),
  },
  {
    title: 'New Booking',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: new Date(d.setDate(d.getDate() - 1)),
  },
];

export const manage_events_list = [
  'Live',
  'Drafts',
  'Under Review',
  'Rejected',
];

export const manage_home_list = ['For You', 'Going', 'Saved'];

export const manage_friends_list = [
  'My Friends',
  'Friend Requests',
  'Add Friends',
];

export const dummyFriendRequestsData = {
  // My Friends Data
  [manage_friends_list[0]]: [
    {
      id: 1,
      name: 'Ethan Carter',
      mutualFriends: '24 Mutual Friends',
      userName: '@ethan_c',
      image: require('@/theme/assets/images/friends-dp-img-1.png'),
    },
    {
      id: 2,
      name: 'Sophia Lee',
      mutualFriends: '12 Mutual Friends',
      userName: '@sophia_l',
      image: require('@/theme/assets/images/friends-dp-img-2.png'),
    },
    {
      id: 3,
      name: 'Liam Walker',
      mutualFriends: '8 Mutual Friends',
      userName: '@liam_w',
      image: require('@/theme/assets/images/friends-dp-img-3.png'),
    },
    {
      id: 4,
      name: 'Olivia Davis',
      mutualFriends: '5 Mutual Friends',
      userName: '@olivia_d',
      image: require('@/theme/assets/images/friends-dp-img-4.png'),
    },
    {
      id: 5,
      name: 'Noah Thompson',
      mutualFriends: '3 Mutual Friends',
      userName: '@noah_t',
      image: require('@/theme/assets/images/friends-dp-img-5.png'),
    },
  ],

  // Friend Requests Data
  [manage_friends_list[1]]: {
    incoming: [
      {
        id: 1,
        type: 'incoming',
        name: 'Sophia Carter',
        mutualFriends: '12 mutual friends',
        image: require('@/theme/assets/images/friends-dp-img-1.png'),
      },
      {
        id: 2,
        type: 'incoming',
        name: 'Ethan Bennett',
        mutualFriends: '8 mutual friends',
        image: require('@/theme/assets/images/friends-dp-img-2.png'),
      },
      {
        id: 3,
        type: 'incoming',
        name: 'Olivia Hayes',
        mutualFriends: '5 mutual friends',
        image: require('@/theme/assets/images/friends-dp-img-3.png'),
      },
    ],
    outgoing: [
      {
        id: 4,
        type: 'outgoing',
        name: 'Liam Foster',
        status: 'Request sent',
        image: require('@/theme/assets/images/friends-dp-img-4.png'),
      },
      {
        id: 5,
        type: 'outgoing',
        name: 'Ava Harper',
        status: 'Request sent',
        image: require('@/theme/assets/images/friends-dp-img-5.png'),
      },
    ],
  },

  // Suggested Friends Data
  [manage_friends_list[2]]: [
      {
        id: 1,
        name: 'Sophia Carter',
        mutualFriends: '12 mutual friends',
        image: require('@/theme/assets/images/friends-dp-img-1.png'),
      },
      {
        id: 2,
        name: 'Ethan Bennett',
        mutualFriends: '8 mutual friends',
        image: require('@/theme/assets/images/friends-dp-img-2.png'),
      },
      {
        id: 3,
        name: 'Olivia Hayes',
        mutualFriends: '5 mutual friends',
        image: require('@/theme/assets/images/friends-dp-img-3.png'),
      },
  ],
};
