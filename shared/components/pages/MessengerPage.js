import React, {
  Platform,
  Component,
  View,
  ScrollView,
  InteractionManager,
  Switch
} from 'react-native'
import { connect } from 'react-redux/native'
import {joinChannel} from '../../actions/channels'
import ActionBar from '../container/ActionBar'
import LoadingIndicator from '../elements/LoadingIndicator'
import Text from '../elements/Text'
import IntroText from '../elements/IntroText'

class MessengerPage extends Component {
  state = {
    interactionsFinished: false
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({interactionsFinished: true})
    })
  }

  render() {
    let interactionsFinishedMarkup = <LoadingIndicator/>
    // const channel_url = this.props.navParams ? this.props.navParams.messenger : null;

    if (this.state.interactionsFinished) {
      interactionsFinishedMarkup = <IntroText />
    }

    return (
      <View style={styles.container}>
        <ActionBar title="Messenger"/>
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
  (state) => ({navParams: state.navigation.params}),
  {joinChannel}
)(MessengerPage)
