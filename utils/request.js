/**
 * exmaple:
import r from '../common/utils/request'
const origin = process.env.NODE_ENV === 'development' ? '' : `${window.location.origin}`
const baseUrl = `${origin}/business`

export default {
  upload: {
    url: `${baseUrl}/inventory/importMerchantSellableQuantity`
  },
  uploadFile: r.post('inventory/importMerchantSellableQuantity', baseUrl, {headers: {'content-type': 'multipart/form-data'}}),
  // 导出
  exportFile: r.post('/inventory/exportSupplierSellableQuantity', baseUrl)
}
 */
import axios from 'axios'
/*
* api url 转换
* */
function transformUrl (url, data, type) {
  if (data && typeof data !== 'string' && !Array.isArray(data) && Object.keys(data).length) {
		let newUrl = url
		const newData = Object.assign({}, data)

		Object.keys(data).forEach((k) => {
			const reg = new RegExp(`{${k}}`, 'g')
			newUrl = newUrl.replace(reg, data[k])

			if (reg.test(url)) {
			newData[k] = undefined
			}
		})

		if (type === 'params') {
			return newData
		} else {
			return newUrl
		}
  } else {
	if (type === 'params') {
			return data
		} else {
			return url
		}
  }
}

// const cookies = document.cookie

const request = axios.create({
  timeout: 5000,
  responseType: 'json',
	headers: {'content-type': 'application/json;charset=UTF-8'},
	// 携带cookie凭证
	withCredentials: true
})

request.interceptors.response.use((response) => {
	const resCodes = [900101001, 900102002, 900102003, 900102004, 900102005, 900102006]
	const { code } = response.data
  if (resCodes.includes(code)) {
    window.location.href = window.location.origin + '/#/login'
  }

  return response
}, (err) => {
	window.location.href = window.location.origin + '/#/login'
})

// function requestData (method, data) {
//   return JSON.stringify(data)
// }

function sendRequest (url, baseUrl, method, requestConfig) {
  const transUrl = baseUrl.replace(/^\//g, '')

  return function (params) {
	const type = method === 'get' ? 'params' : 'data'
	const basic = {
	method,
	baseURL: transUrl,
	url: transformUrl(url, params),
	[type]: transformUrl(url, params, 'params')
	}
	const allConfig = Object.assign({}, basic, requestConfig ? requestConfig : {})

	// return request(allConfig)
	return new Promise((res, rej) => {
		request(allConfig).then(json => {
			res(json.data)
		})
	})
  }
}

const getMethod = {
  get: (url, baseUrl, config) => sendRequest(url, baseUrl, 'get', config),
  post: (url, baseUrl, config) => sendRequest(url, baseUrl, 'post', config),
  delete: (url, baseUrl, config) => sendRequest(url, baseUrl, 'delete', config),
  put: (url, baseUrl, config) => sendRequest(url, baseUrl, 'put', config),
  patch: (url, baseUrl, config) => sendRequest(url, baseUrl, 'patch', config),
}

export default getMethod
