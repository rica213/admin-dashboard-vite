export const menu = [
  {
    id: 1,
    title: 'Main',
    listItems: [
      {
        id: 1,
        title: 'Homepage',
        url: '/',
        icon: 'home.svg',
      },
      {
        id: 2,
        title: 'Profile',
        url: 'users/1',
        icon: 'user.svg',
      },
    ],
  },
  {
    id: 2,
    title: 'Lists',
    listItems: [
      {
        id: 1,
        title: 'Users',
        url: '/users',
        icon: 'user.svg',
      },
      {
        id: 2,
        title: 'Products',
        url: '/products',
        icon: 'product.svg',
      },
      {
        id: 3,
        title: 'Orders',
        url: '/orders',
        icon: 'order.svg',
      },
      {
        id: 4,
        title: 'Posts',
        url: '/posts',
        icon: 'post2.svg',
      },
    ],
  },
  {
    id: 3,
    title: 'General',
    listItems: [
      {
        id: 1,
        title: 'Elements',
        url: '/',
        icon: 'element.svg',
      },
      {
        id: 2,
        title: 'Notes',
        url: '/',
        icon: 'note.svg',
      },
      {
        id: 3,
        title: 'Forms',
        url: '/',
        icon: 'form.svg',
      },
      {
        id: 4,
        title: 'Calendar',
        url: '/',
        icon: 'calendar.svg',
      },
    ],
  },
  {
    id: 4,
    title: 'Maintenance',
    listItems: [
      {
        id: 1,
        title: 'Settings',
        url: '/',
        icon: 'setting.svg',
      },
      {
        id: 2,
        title: 'Backups',
        url: '/',
        icon: 'backup.svg',
      },
    ],
  },
  {
    id: 5,
    title: 'Analytics',
    listItems: [
      { id: 1, title: 'Charts', url: '/', icon: 'chart.svg' },
      {
        id: 2,
        title: 'Logs',
        url: '/',
        icon: 'log.svg',
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Madge Rowe",
    email: "vehvizwah@gekbewib.qa",
    amount: "21.7028",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Dale Butler",
    email: "mezi@avugi.ro",
    amount: "22.2422",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Jerome Ellis",
    email: "dudivode@pulzitcod.uy",
    amount: "77.6404",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/6608313/pexels-photo-6608313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Dennis Barnes",
    email: "ejucipor@et.lv",
    amount: "11.993",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Francisco Nichols",
    email: "fadfil@dahna.se",
    amount: "55.9435",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/4971135/pexels-photo-4971135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Raymond Dunn",
    email: "ji@im.sy",
    amount: "78.9215",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Loretta Houston",
    email: "ohviped@ojcodro.ae",
    amount: "28.9253",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wen", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "219",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wen", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};

export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wen", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};

export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wen", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2785,
    },
    {
      name: "Thu",
      profit: 1325,
    },
    {
      name: "Fri",
      profit: 5520,
    },
    {
      name: "Sat",
      profit: 3500,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2785,
    },
    {
      name: "Thu",
      visit: 1325,
    },
    {
      name: "Fri",
      visit: 5520,
    },
    {
      name: "Sat",
      visit: 3500,
    },
  ],
};