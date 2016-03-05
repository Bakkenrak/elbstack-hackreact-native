import {
    SENDBIRD_LIST_CHANNELS,
    SENDBIRD_LIST_CHANNELS_ERROR,
    SENDBIRD_JOIN_CHANNEL,
    SENDBIRD_JOIN_CHANNEL_ERROR
} from '../constants/ActionTypes'
import sendbird from 'sendbird'

export function listChannels() {
  const page = 1
  const limit = 20

  return dispatch => {
    sendbird.getChannelList({
      page: page,
      limit: limit,
      successFunc: (data) => {
        dispatch({
          type: SENDBIRD_LIST_CHANNELS,
          data: data
        })
      },
      errorFunc: (status, error) => {
        dispatch({
          type: SENDBIRD_LIST_CHANNELS_ERROR,
          status: status,
          error: error
        })
      }
    })
  }
}

export function joinChannel(url) {
  return dispatch => {
    sendbird.joinChannel(
        url,
        {
          successFunc: (data) => {
            console.log('joined', data)
            dispatch({
              type: SENDBIRD_JOIN_CHANNEL,
              data: data
            })
          },
          errorFunc: (status, error) => {
            console.log('error joining', status, error)
            dispatch({
              type: SENDBIRD_JOIN_CHANNEL_ERROR,
              status: status,
              error: error
            })
          }
        }
    )
  }
}
