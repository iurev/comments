import axios from 'axios'


export const getFeedbacksList = () => (
  axios.get(`${window.location.protocol}//${process.env.REACT_APP_API_DOMAIN}${process.env.REACT_APP_FEEDBACKS_URL}`)
)
