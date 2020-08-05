import axios from 'axios'

function request(config, method = 'GET') {
  const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 6000,
    method
  })

  return instance(config)
}

function get(config) {
  return request(config)
}

function post(config) {
  return request(config, 'POST')
}

function delete_(config) {
  return request(config, 'DELETE')
}

function put(config) {
  return request(config, 'PUT')
}

export { request, get, post, delete_, put }
