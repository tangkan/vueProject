const Home = () => import('@/pages/home')
const Mall = () => import('@/pages/mall')
const Cart = () => import('@/pages/cart')
const Mine = () => import('@/pages/mine')
const Detail = () => import('@/pages/detail')


export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    text: '首页',
    isTabbar: true,
    component: Home,
  },
  {
    path: '/mall',
    name: 'mall',
    text: '商城',
    isTabbar: true,
    component: Mall,
  },
  {
    path: '/cart',
    name: 'cart',
    text: '购物车',
    isTabbar: true,
    component: Cart,
  },
  {
    path: '/mine',
    name: 'mine',
    text: '我的',
    isTabbar: true,
    component: Mine,
  },
  {
    path: '/detail',
    name: 'detail',
    text: '详情',
    component: Detail,
  }
]