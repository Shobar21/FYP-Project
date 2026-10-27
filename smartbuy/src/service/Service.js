import axios from 'axios'

// The backend lives in the same project under /api.
// Locally, package.json "proxy" forwards /api to http://localhost:5000.
const API_URL = process.env.REACT_APP_API_URL || ''

const productsAPI = `${API_URL}/api/products/get`
const SITES_WITH_IMAGES = ['shophive', 'bucket.pk']

export const getProducts = async (skip, limit) => {
  const response = await axios.get(productsAPI, {
    params: {
      skip,
      limit,
      sites: JSON.stringify(SITES_WITH_IMAGES),
    },
  })
  return Array.isArray(response.data) ? response.data : response.data.data || []
}
