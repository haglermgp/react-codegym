import * as API from './constants.js'

const get = (url) => {
	const URL = API.ROOT_URL.url + url

	return new Promise((resolve, reject) => {
		fetch(URL)
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err)
			})
	})
}

const post = (url, id ) => {
	const URL = API.ROOT_URL + url

	return new Promise((resolve, reject) => {
		fetch(URL)
			.then(res => {
				resolve(res)
			})
			.then(err => {
				reject(err)
			})
	})
}

export { get, post } 