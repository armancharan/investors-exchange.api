// Dependencies.
import axios from 'axios'
import {Fetch} from './types'

// Base URL.
const base = 'https://api.iextrading.com/1.0'

// Fetch.
export const fetch: Fetch = async (path, params) => {
  const parameters = params ? Object.entries(params) : ''
  const query = parameters ? parameters.reduce((query: string, [key, value]: [string, string], i: number) => `${query}${i > 0 ? '&' : ''}${key}=${value}`, '?') : ''
  const url = `${base}${path}${query}`
  return (await axios.get(url)).data
}

// Is Array.
export const isArray = (x: any[]) => x && Array.isArray(x)

// Is Number.
export const isNumber = (x: number) => x && !isNaN(Number(x))

// Not Object.
export const notAnObject = (x: any) => typeof x !== 'object' || Array.isArray(x)