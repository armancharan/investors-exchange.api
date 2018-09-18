// Dependencies.
import axios from 'axios'

// Base URL.
const base = 'https://api.iextrading.com/1.0'

// Fetch.
export const fetch = async (path, params) => {
  const parameters = params ? Object.entries(params) : ''
  const query = parameters ? parameters.reduce((query, [key, value], i) => `${query}${i > 0 ? '&' : ''}${key}=${value}`, '?') : ''
  const url = `${base}${path}${query}`
  return (await axios.get(url)).data
}

// Is Array.
const isArray = x => x && Array.isArray(x)

// Is Number.
const isNumber = x => x && !isNaN(Number(x))

// Not Object.
export const notAnObject = x => typeof x !== 'object' || Array.isArray(x)