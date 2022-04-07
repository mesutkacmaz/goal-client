import axios from 'axios'

const API_URL = '/api/v1/auth'

// Register User
const register = async (userData) => {
  const { data } = await axios.post(`${API_URL}/register`, userData)

  return data
}

// Login User
const login = async (userData) => {
  const { data } = await axios.post(`${API_URL}/login`, userData)

  if (data) {
    localStorage.setItem('user', JSON.stringify(data))
  }

  return data
}

// Log Out
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
