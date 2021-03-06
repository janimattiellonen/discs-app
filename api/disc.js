import axios from 'axios'

import config from '../config.client'

import { createQueryString } from './restDbQuery'

export default {
  getDiscs({ query, filter, limit, offset, order }) {
    const queryString = createQueryString({ query, filter, limit, offset, order })

    return axios
      .get(`${config.server.base_url}/rest/discs?metafields=true&apikey=${config.server.api_key}&${queryString}`)
      .then((res) => {
        return res.data
      })
  },

  getFoo() {
    // // q={"name": {"$regex": "^mako3"}}&h={}&totals=true&count=true
    const queryString = 'q={"name": {"$regex": "^mako3"}}&h={}&totals=true&count=true'

    return axios
      .get(`${config.server.base_url}/rest/discs?metafields=true&apikey=${config.server.api_key}&${queryString}`)
      .then((res) => {
        return res.data
      })
  },

  getStats() {
    return axios.get(`${config.server.rest_base_url}/stats`).then((res) => {
      return res.data
    })
  },
}
