export default [
  {
    label: 'Home',
    path: '/',
    icon: 'home',
    children: null,
  },
  {
    label: 'Services',
    path: '/services',
    icon: 'accessibility',
    children: [
      {
        label: 'Massage',
        path: '/services/massage',
        icon: 'keyboard_arrow_right',
        children: null,
      },
      {
        label: 'Lymphatic Drainage',
        path: '/services/lymphatic',
        icon: 'keyboard_arrow_right',
        children: null,
      },
      {
        label: 'Myofascial Release',
        path: '/services/myofascial',
        icon: 'keyboard_arrow_right',
        children: null,
      },
    ]
  },
  {
    label: 'About',
    path: '/about',
    icon: 'account_circle',
    children: null,
  },
  {
    label: 'Appointments',
    path: '/appointments',
    icon: 'schedule',
    children: null,
  }
];
