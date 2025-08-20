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

export const signup_switching = ['User', 'Event Planner'];

export const manage_home_list = ['For You', 'Going', 'Saved'];

export const top_comments = [
  {
    name: 'Ava Harper',
    comment_time: '2d',
    img: require('@/theme/assets/images/comment_image.png'),
    content: `This event sounds amazing! I'm really looking forward to it. Anyone else planning to go?`,
    like: 12,
  },
  {
    name: 'Owen Mitchell',
    comment_time: '1d',
    img: require('@/theme/assets/images/comment_image2.png'),
    content: `I'm in! It's going to be a blast. Let's meet up beforehand if anyone's interested.`,
    like: 8,
    replies: [
      {
        name: 'Chloe Bennett',
        comment_time: '12h',
        img: require('@/theme/assets/images/comment_image.png'),
        content: `I'm definitely going! Meeting up sounds like a great idea.`,
        like: 5,
        child: true,
      },
      {
        name: 'Lucas Carter',
        comment_time: '10h',
        img: require('@/theme/assets/images/comment_image2.png'),
        content: `This event sounds amazing! I'm really looking forward to it. Anyone else planning to go?`,
        like: 3,
        child: true,
      },
    ],
  },
];

export const all_comments = [
  {
    name: 'Ava Harper',
    comment_time: '2d',
    img: require('@/theme/assets/images/comment_image.png'),
    content: `This event sounds amazing! I'm really looking forward to it. Anyone else planning to go?`,
    like: 12,
  },
  {
    name: 'Owen Mitchell',
    comment_time: '1d',
    img: require('@/theme/assets/images/comment_image2.png'),
    content: `I'm in! It's going to be a blast. Let's meet up beforehand if anyone's interested.`,
    like: 8,
  },
  {
    name: 'Chloe Bennett',
    comment_time: '12h',
    img: require('@/theme/assets/images/comment_image.png'),
    content: `I'm definitely going! Meeting up sounds like a great idea.`,
    like: 5,
  },
  {
    name: 'Lucas Carter',
    comment_time: '10h',
    img: require('@/theme/assets/images/comment_image2.png'),
    content: `This event sounds amazing! I'm really looking forward to it. Anyone else planning to go?`,
    like: 3,
  },
];

export const activities_data = [
  {
    img: require('@/theme/assets/images/comment_image.png'),
    name: 'Sophia Turner',
    activity: 'Liked an event',
    content: `The best of the best! I'm so excited to see this show.`,
    type: 'Music',
    activity_name: 'The Indie Rock Revival',
    date: new Date(),
    activity_image: require('@/theme/assets/images/activity_image.png'),
    likes: 12,
    comments: 3,
  },
  {
    img: require('@/theme/assets/images/comment_image.png'),
    name: 'Sophia Turner',
    activity: 'Liked an event',
    content: `The best of the best! I'm so excited to see this show.`,
    type: 'Music',
    activity_name: 'The Indie Rock Revival',
    date: new Date(),
    activity_image: require('@/theme/assets/images/activity_image.png'),
    likes: 12,
    comments: 3,
  },
  {
    img: require('@/theme/assets/images/comment_image.png'),
    name: 'Sophia Turner',
    activity: 'Liked an event',
    content: `The best of the best! I'm so excited to see this show.`,
    type: 'Music',
    activity_name: 'The Indie Rock Revival',
    date: new Date(),
    activity_image: require('@/theme/assets/images/activity_image.png'),
    likes: 12,
    comments: 3,
  },
  {
    img: require('@/theme/assets/images/comment_image.png'),
    name: 'Sophia Turner',
    activity: 'Liked an event',
    content: `The best of the best! I'm so excited to see this show.`,
    type: 'Music',
    activity_name: 'The Indie Rock Revival',
    date: new Date(),
    activity_image: require('@/theme/assets/images/activity_image.png'),
    likes: 12,
    comments: 3,
  },
  {
    img: require('@/theme/assets/images/comment_image.png'),
    name: 'Sophia Turner',
    activity: 'Liked an event',
    content: `The best of the best! I'm so excited to see this show.`,
    type: 'Music',
    activity_name: 'The Indie Rock Revival',
    date: new Date(),
    activity_image: require('@/theme/assets/images/activity_image.png'),
    likes: 12,
    comments: 3,
  },
  {
    img: require('@/theme/assets/images/comment_image.png'),
    name: 'Sophia Turner',
    activity: 'Liked an event',
    content: `The best of the best! I'm so excited to see this show.`,
    type: 'Music',
    activity_name: 'The Indie Rock Revival',
    date: new Date(),
    activity_image: require('@/theme/assets/images/activity_image.png'),
    likes: 12,
    comments: 3,
  },
  {
    img: require('@/theme/assets/images/comment_image.png'),
    name: 'Sophia Turner',
    activity: 'Liked an event',
    content: `The best of the best! I'm so excited to see this show.`,
    type: 'Music',
    activity_name: 'The Indie Rock Revival',
    date: new Date(),
    activity_image: require('@/theme/assets/images/activity_image.png'),
    likes: 12,
    comments: 3,
  },
  {
    img: require('@/theme/assets/images/comment_image.png'),
    name: 'Sophia Turner',
    activity: 'Liked an event',
    content: `The best of the best! I'm so excited to see this show.`,
    type: 'Music',
    activity_name: 'The Indie Rock Revival',
    date: new Date(),
    activity_image: require('@/theme/assets/images/activity_image.png'),
    likes: 12,
    comments: 3,
  },
];
