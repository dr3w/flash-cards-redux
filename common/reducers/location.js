import { UPDATE_LOCATION } from '../actions/location'

export default function update(state = "", action) {
  switch (action.type) {
    case UPDATE_LOCATION:
      console.log("UPDATE_LOCATION", state, action);
      return state

    default:
      return state
  }
}
