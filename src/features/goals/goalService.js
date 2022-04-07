import axios from 'axios'

const API_URL = '/api/v1/goals'

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const { data } = await axios.post(API_URL, goalData, config)

  return data
}

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const { data } = await axios.get(API_URL, config)

  return data
}

// Delete user goal
const deleteGoal = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const { data } = await axios.delete(`${API_URL}/${id}`, config)

  return data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
}

export default goalService
