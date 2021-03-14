import axios from 'axios'

export default {
  getManufacturers() {
    return axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/manufacturers?apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then((res) => res.data)
  },
}
