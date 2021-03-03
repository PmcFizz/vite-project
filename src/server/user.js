import fetch from '../util/http'

export function getUser () {
  return fetch({
    url: '/api/users',
    methods: 'get'
  })
}