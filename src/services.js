import axios from 'axios'
import iView from 'iview';

const ajax = axios.create({
  baseURL: "http://rap2api.taobao.org/app/mock/85803"
});

// 请求前拦截处理
ajax.interceptors.request.use(config => {
  iView.LoadingBar.start();
  return config
});

ajax.interceptors.response.use(resp => {
  iView.LoadingBar.finish();
  return resp
});

export const getMallRightList = () => {
  return ajax.get("/api/v1/mallRightList")
}

export const getList = (id) => {
  return ajax.get(`/api/v1/list?${id}`)
}

export const getDetail = (id) => {
  return ajax.get(`/api/v1/detail?${id}`)
}