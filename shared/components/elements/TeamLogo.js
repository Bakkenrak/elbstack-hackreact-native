import React, {
  Component,
  Image,
  View
} from 'react-native'

import Text from './Text'

export default class TeamLogo extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/Images/flask.png')} />
        <Text>Die Experimentierer</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    margin: 20
  },
  image: {
    width: 100,
    height: 100
  }
}