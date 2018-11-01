const express = require('express')
const Mock = require('mockjs')

//创建一个express实例
const app = express();

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  //允许请求的方式
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
})

app.get('/api/v1/mallRightList', (req,res) => {
  res.json(Mock.mock({
    "code": 200,
    "errorMsg": "",
    "data|20-30": [
      {
        "id|+1": 10021,
        "title": "@ctitle(3,4)",
        "img": "@img(62x62,@color)"
      }
    ]
  }));
})

app.get('/api/v1/list', (req,res) => {
  res.json(Mock.mock({
    "code": 200,
    "errMsg": "SUCCESS",
    "data|20-30": [
      {
        "id|+1": 100029,
        "title": "@ctitle(4,8)",
        "price": "@float(100,1000,2,2)",
        "img": "@img(120x120,@color)",
        "dec": "@cparagraph(1)"
      }
    ]
  }));
})

app.get('/api/v1/detail/:id', (req,res) => {
  res.json(Mock.mock({
    "code": 200,
    "errorMsg": "SUCCESS",
    "data": {
      "id": req.params.id,
      "title": "@ctitle(3,7)",
      "price": "@float(100,1000,2,2)",
      "dec": "@cparagraph(2)",
      "img": "@img(375x375,@color)"
    }
  }));
})

app.get('/api/v1/recommend', (req,res) => {
  res.json(Mock.mock({
    "code": 200,
    "errorMsg": "",
    "data|15-25": [
      {
        "id|+1": 3000,
        "title": "@ctitle(3,4)",
        "price": "@float(100,1000,2,2)",
        "des": "@cparagraph(1)",
        "img": "@img(185x185,@color)"
      }
    ]
  }));
})

app.get('/api/v1/login', (req,res) => {
  res.json(Mock.mock({
    "code": 200,
    "errorMsg": "",
    "data": {
      "token": "@guid",
      "username": "@ctitle(2,4)"
    }
  }));
})

app.get('/api/v1/history', (req,res) => {
  res.json(Mock.mock({
    "code": 200,
    "errorMsg": "SUCCESS",
    "data|8-16": [
      {
        "id|+1": 3012,
        "keyword": "@ctitle(2,3)"
      }
    ]
  }));
})



app.listen('8000', () => {
  console.log('mock服务已在8000端口启动……')
})