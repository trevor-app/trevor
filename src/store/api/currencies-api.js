import axios from 'axios'

export function fetchRates (base) {
  return axios.get(`https://api.fixer.io/latest?base=${base}`)
}
