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

export const manage_home_list = [
  'For You',
  'Going',
  'Saved',
];
