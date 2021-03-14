import axios from 'axios'

import config from '../config.client'

import { createQueryString } from './restDbQuery'

export default {
  getDiscs({ query, filter, limit, offset, order }) {
    const queryString = createQueryString({ query, filter, limit, offset, order })

    return axios
      .get(
        `${config.server.base_url}/rest/discs?metafields=true&apikey=${process.env.REACT_APP_API_KEY}&${queryString}`,
      )
      .then((res) => {
        return res.data
      })
  },

  getStats() {
    return axios.get(`${process.env.REACT_APP_STATS_BASE_URL}/stats`).then((res) => {
      return res.data
    })
  },
}
