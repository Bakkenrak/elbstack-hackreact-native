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

        <Text>
          <Image
            style={styles.image}
            source={require('../../../assets/Images/flask.png')} />
            <Text style={{fontSize: 23}}>Die Experimentierer</Text>
          </Text>
      </View>
    )
  }
}

const styles = {
  container: {
    margin: 20
  },
  image: {
    width: 50,
    height: 50
  }
}