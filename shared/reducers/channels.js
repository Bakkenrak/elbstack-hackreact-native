import { SENDBIRD_LIST_CHANNELS, SENDBIRD_JOIN_CHANNEL } from '../constants/ActionTypes'

export default function channels(state = {}, action) {
  switch (action.type) {
    case SENDBIRD_LIST_CHANNELS:
      return Object.assign(
        {},
        state,
        {
          page: action.data.page,
          next: action.data.next,
          list: action.data.channels.reduce((memo, channel)=> ({
            ...memo,
            [channel.id]: channel
          }), {})
        }
      )
    case SENDBIRD_JOIN_CHANNEL:
      console.log('reducer joined', state.joined)

      return Object.assign(
        {},
        state,
        {
          joined: {
              ...state.joined,
              [action.data.name]: action.data
          }
        }
      )
    default:
      return state
  }
}
