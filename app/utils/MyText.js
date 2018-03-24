import React from 'react';
import {Text, Platform,StyleSheet} from 'react-native';
import PropTypes from 'prop-types'
import {getFontSize} from './getFontSize'

class MyText extends React.PureComponent {
    constructor(props) {
        super(props);

    }
    static defaultProps = {
        style:{}
    }
    static propTypes = {
        
        style:Text.propTypes.style
    }

    render() {
        
        return <Text allowFontScaling={true} style={[styles.default,this.props.style]}>
            {this.props.children}
        </Text>

    }
}
const styles = StyleSheet.create({
       default:{
           color:'#000',
           fontSize:getFontSize(20),
           fontWeight: Platform.OS === 'ios' ? '700' : '100',
       }
  })
export default MyText