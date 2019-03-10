import axios from 'axios'

const LIST_URL = '/devbl/8e10ab4abe2ca613afd0db67f85d80d0/raw/a02f23b20f5a21fd13878c431874c56640b84d42/feedbacks.json'

export const getFeedbacksList = () => (
  axios.get(`${window.location.protocol}//${process.env.REACT_APP_API_DOMAIN}${LIST_URL}`)
)
