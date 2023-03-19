export const increaseAgeAction = () => {
  return { type: 'increase_age' }
}

export const decreaseAgeAction = () => {
  return { type: 'decrease_age' }
}

export const increaseXAgeAction = (payload) => {
  return { type: 'increase_xage', payload }
}
