import axios from 'axios'
import { Indicator } from 'mint-ui';

const ajax = axios.create({
  baseURL: "http://localhost:8000"
});

// 请求前拦截处理
ajax.interceptors.request.use(config => {
  Indicator.open('加载中……');
  return config
});

ajax.interceptors.response.use(resp => {
  Indicator.close()
  return resp
});

export const getMallRightList = () => {
  return ajax.get("/api/v1/mallRightList")
}

export const getList = () => {
  return ajax.get('/api/v1/list')
}

export const getDetail = (id) => {
  return ajax.get(`/api/v1/detail/${id}`)
}

export const getRecommend = () => {
  return ajax.get("/api/v1/recommend")
}

export const login = () => {
  return ajax.get("/api/v1/login")
}

// export const getHistoryData = (his) => {
//   return ajax.get("/api/v1/history")
// }

export const getHotSearchData = (hot) => {
  return ajax.get("/api/v1/history")
}

export const getSearchData = (keyword) => {
  return ajax.get("/api/v1/searchList")
}