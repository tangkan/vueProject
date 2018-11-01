import mallChildren from './mallRoutes'

const Home = () => import('@/pages/home')
const Mall = () => import('@/pages/mall')
const Cart = () => import('@/pages/cart')
const Mine = () => import('@/pages/mine')
const Detail = () => import('@/pages/detail')
const List = () => import('@/pages/list')
const Login = () => import('@/pages/login')
const Search = () => import('@/pages/search')


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
    meta : {
      isHidden: false,
    },
    component: Home,
  },
  {
    path: '/mall',
    name: 'mall',
    text: '商城',
    isTabbar: true,
    component: Mall,
    children: mallChildren,
    redirect:'/mall/zhendianzhibao',
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
    path: '/list/:id',
    name: 'list',
    text: '列表',
    component: List,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    text: '详情',
    component: Detail,
  },
  {
    path: '/login',
    name: 'login',
    text: '登录',
    component: Login,
  },
  {
    path: '/search',
    name: 'search',
    text: '搜索',
    component: Search,
  }
]