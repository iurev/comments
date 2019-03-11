import axios from 'axios'

const LIST_URL = '/list'

export const getFeedbacksList = () => (
  axios.get(`${window.location.protocol}//${process.env.REACT_APP_API_DOMAIN}${LIST_URL}`)
)
