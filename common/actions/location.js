import { UPDATE_LOCATION } from 'react-router-redux'

export function update(location) {
  return {
    type: UPDATE_LOCATION,
    location
  }
}
