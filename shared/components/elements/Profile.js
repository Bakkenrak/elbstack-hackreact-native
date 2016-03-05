import React, {
  Component,
  Image,
  View
} from 'react-native'

import {connect} from 'react-redux'

import Text from './Text'


export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.userName}</Text>
      </View>
    )
  }
}

export default connect((state) => ({userName: state.sendbird.user_name}))(Profile)

const styles = {
  container: {
    margin: 20
  }
}
