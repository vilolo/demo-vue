import axios from 'axios'

let baseUrl = 'http://192.168.201.235'

// export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
export const requestLogin = function () {
  return axios.get(`${baseUrl}/v2/Login/doLogin`).then(function (res) {
    // console.log(`${baseUrl}/v2/Login/doLogin`)
    // console.log(res.data)
    return res.data
  }).catch(function (err) {
    console.log('axios err')
    console.log(err)
  })
}

export const testLogin = function (username, password) {
  console.log(username, password)

  //   proxyTable代理形式 同时修改文件： config/index.js   main.js
  //   return axios.get('/index/testLogin').then(function (res) {
  //     console.log(res)
  //     return res.data
  //   })

  //   后端配置允许跨域
  return axios.get('http://demo.local/index.php/index/index/testLogin').then(function (res) {
    console.log(res)
    return res.data
  })
}
