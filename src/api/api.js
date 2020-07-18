import axios from 'axios'
import qs from 'qs'

let baseUrl = 'http://lcxyii.back/index.php'

// let baseUrl = 'http://apitest.local/index.php'

// let baseUrl = 'http://198.35.45.87:9071/index.php'

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

  getFootNavigationList (data) {
    return axios({
      method: 'get',
      params: data,
      url: baseUrl + '/v1/navigation/foot-list'
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
  },

  delNavigation (data) {
    return axios({
      method: 'post',
      data: qs.stringify(data),
      url: baseUrl + '/v1/navigation/del'
    }).then(function (res) {
      return res.data
    })
  },

  subArticle (data) {
    return axios({
      method: 'post',
      data: qs.stringify(data),
      url: baseUrl + '/v1/article/do-save'
    }).then(function (res) {
      return res.data
    })
  },

  getArticleList (data) {
    return axios({
      method: 'get',
      params: data,
      url: baseUrl + '/v1/article/list'
    }).then(function (res) {
      return res.data
    })
  },

  getArticleDetail (data) {
    return axios({
      method: 'get',
      params: data,
      url: baseUrl + '/v1/article/get-detail'
    }).then(function (res) {
      return res.data
    })
  },

  subImgDesc (data) {
    return axios({
      method: 'post',
      data: qs.stringify(data),
      url: baseUrl + '/v1/img-desc/do-save'
    }).then(function (res) {
      return res.data
    })
  },

  getImgDescList (data) {
    return axios({
      method: 'get',
      params: data,
      url: baseUrl + '/v1/img-desc/list'
    }).then(function (res) {
      return res.data
    })
  },

  getImgDescDetail (data) {
    return axios({
      method: 'get',
      params: data,
      url: baseUrl + '/v1/img-desc/detail'
    }).then(function (res) {
      return res.data
    })
  },

  delImgDesc (data) {
    return axios({
      method: 'post',
      data: qs.stringify(data),
      url: baseUrl + '/v1/img-desc/del'
    }).then(function (res) {
      return res.data
    })
  },

  getArticleSelectList () {
    return axios({
      method: 'get',
      url: baseUrl + '/v1/article/get-select-list'
    }).then(function (res) {
      return res.data
    })
  },

  getCustomerMessageList () {
    return axios({
      method: 'get',
      url: baseUrl + '/v1/customer-message/list'
    }).then(function (res) {
      return res.data
    })
  },
  getImgDescCategoryList () {
    return axios({
      method: 'get',
      url: baseUrl + '/v1/img-desc/get-category'
    }).then(function (res) {
      return res.data
    })
  },
  getLatestNews () {
    return axios({
      method: 'get',
      url: baseUrl + '/v1/article/get-news'
    }).then(function (res) {
      return res.data
    })
  },
  updateLatestNews (data) {
    return axios({
      method: 'post',
      data: qs.stringify(data),
      url: baseUrl + '/v1/article/update-news'
    }).then(function (res) {
      return res.data
    })
  }
}
