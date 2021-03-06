import React, {
  Component,
  PropTypes,
  View,
  Image,
  TouchableHighlight
} from 'react-native'

import Text from './../elements/Text'
import LoadingIndicator from './../elements/LoadingIndicator'
import colors from '../../constants/Colors'
import globalStyles from '../../constants/GlobalStyles'
import Bubble from './../elements/Bubble'

export default class ListItem extends Component {
  static propTypes = {
    showImageLoading: PropTypes.bool,
    onPress: PropTypes.func,
    headline: PropTypes.string.isRequired,
    subHeadline: PropTypes.string,
    imageUri: PropTypes.string,
    additionalText: PropTypes.object,
    additionalTextComponent: PropTypes.object,
    addon: PropTypes.object,
    hideImage: PropTypes.bool,
    cellHeight: PropTypes.number,
    bubble: PropTypes.number,
    style: PropTypes.any
  };

  static defaultProps = {
    cellHeight: 90
  };

  render() {
    let bubbleMarkup = (this.props.bubble || 0) > 0 ? (
      <Bubble key={'Bubble'}
              backgroundColor={'red'}
              outline={true}
              number={this.props.bubble > 99 ? '99+' : this.props.bubble}
              style={styles.bubble}/>
    ) : null


    let imageItem = <LoadingIndicator/>
    const defaultImageSource = require('../../images/placeholder/user.png')

    if (!this.props.showImageLoading) {
      imageItem = this.props.hideImage ? null :
        <View style={styles.imageContainer}>
          <Image
            source={{uri: this.props.imageUri}}
            defaultSource={defaultImageSource}
            style={[styles.image, (this.props.style || {}).image]}
          />
          {bubbleMarkup}
        </View>
    }

    const itemContent = (
      <View style={styles.textContainer}>
        <Text style={styles.headline}>{this.props.headline}</Text>
        {this.props.subHeadline ?
          <Text numberOfLines={2} style={styles.subHeadline}>{this.props.subHeadline}</Text> : null}
        {this.props.additionalText ?
          <Text style={styles.additionalText}>{this.props.additionalText}</Text> : null}
        {this.props.additionalTextComponent ? this.props.additionalTextComponent : null}
      </View>
    )

    const addon = this.props.addon ? this.props.addon : null

    let item = (
      <View
        style={this.props.style && this.props.style.row ? [styles.row, this.props.style.row, {height: this.props.cellHeight}] : [styles.row, {height: this.props.cellHeight}]}>
        {imageItem}
        {itemContent}
        {addon}
      </View>
    )

    if (this.props.onPress) {
      item = (
        <TouchableHighlight onPress={this.props.onPress} activeOpacity={1} underlayColor="transparent">
          {item}
        </TouchableHighlight>
      )
    }

    return item
  }
}

const styles = {
  row: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    overflow: 'hidden'
  },
  textContainer: {
    flex: 1
  },
  additionalText: {
    ...globalStyles.s,
    position: 'absolute',
    top: 0,
    right: 0
  },
  headline: {
    ...globalStyles.userName,
    flex: 1
  },
  subHeadline: {
    ...globalStyles.s,
    color: colors.DARKGREY
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  imageContainer: {
    flexDirection: 'row',
    paddingRight: 10
  },
  bubble: {
    container: {
      position: 'absolute',
      top: 0,
      right: 2
    }
  }
}
