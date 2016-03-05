import React, {
  Platform,
  Component,
  View,
  ScrollView,
  InteractionManager,
  Switch
} from 'react-native'
import { connect } from 'react-redux/native'

import { listChannels } from '../../actions/channels'

import ActionBar from '../container/ActionBar'
import ListItem from '../container/ListItem'
import LoadingIndicator from '../elements/LoadingIndicator'
import Text from '../elements/Text'
import IntroText from '../elements/IntroText'

import { navigateTo } from '../../actions/navigation'

class ChannelsPage extends Component {
  state = {
    interactionsFinished: false
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({interactionsFinished: true})

      this.props.listChannels()
    })
  }

  render() {
    let interactionsFinishedMarkup = <LoadingIndicator/>
    const channels = this.props.channelList

    if (this.state.interactionsFinished && channels) {
      interactionsFinishedMarkup = Object.keys(channels).map(channel => {
        const chan = channels[channel];
        return (<ListItem
          headline={chan.name}
          imageUri={chan.cover_img_url}
          bubble={chan.member_count}
          key={chan.id}
          onPress={this.props.navigateTo.bind(this, 'messenger', chan.channel_url)}
        ></ListItem>
      )})
    }

    return (
      <View style={styles.container}>
        <ActionBar title="Available Channels"/>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={true}>
          {interactionsFinishedMarkup}
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f7f8fc'
  }
}


export default connect(
  (state) => ({channelList: state.channels.list}),
  {
    navigateTo,
    listChannels
  }
)(ChannelsPage)
