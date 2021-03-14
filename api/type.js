import axios from 'axios'

export default {
  getTypes() {
    return axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/types?apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then((res) => res.data)
  },
}
