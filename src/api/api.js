import axios from 'axios'
import qs from 'qs'

let baseUrl = 'http://lcxyii.back/index.php'

export default {
  doLogin (username, password) {
    let data = {'username': username, 'password': password}
    return axios({
      method: 'post',
      data: qs.stringify(data),
      url: baseUrl + '/v1/logins'
    }).then(function (res) {
      return res.data
    })
  },

  getCompanyInfo () {
    return axios({
      method: 'get',
      url: baseUrl + '/v1/company-info/get-info'
    }).then(function (res) {
      return res.data
    })
  },

  subCompany (data) {
    return axios({
      method: 'post',
      data: qs.stringify(data),
      url: baseUrl + '/v1/company-info/update-info'
    }).then(function (res) {
      return res.data
    })
  },

  logout () {
    return axios({
      method: 'get',
      url: baseUrl + '/v1/login/logout'
    }).then(function (res) {
      return res.data
    })
  },

  getNavigationList (data) {
    return axios({
      method: 'get',
      params: data,
      url: baseUrl + '/v1/navigation/list'
    }).then(function (res) {
      return res.data
    })
  },

  getNavigationDetail (data) {
    return axios({
      method: 'get',
      params: data,
      url: baseUrl + '/v1/navigation/get-detail'
    }).then(function (res) {
      return res.data
    })
  },

  subNavigation (data) {
    return axios({
      method: 'post',
      data: qs.stringify(data),
      url: baseUrl + '/v1/navigation/do-save'
    }).then(function (res) {
      return res.data
    })
  }
}
