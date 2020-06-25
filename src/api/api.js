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
      url: baseUrl + '/v1/company-info/update'
    }).then(function (res) {
      return res.data
    })
  },

  logout () {
    return axios({
      method: 'post',
      url: baseUrl + '/v1/login/logout'
    }).then(function (res) {
      return res.data
    })
  }
}
