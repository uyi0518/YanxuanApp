import React from 'react';
import {
    View,
    Animated,
    StyleSheet,
    ScrollView,
    Text,
    Platform,
    Dimensions,
    ViewPropTypes,
    TouchableOpacity,
    PixelRatio
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import MyText from '../../utils/MyText'


const {width, height} = Dimensions.get("window");

class NavHeader extends React.Component {
    constructor(props) {
        super(props);

    }
    static defaultProps = {
        lefttCustomView:null,
        rightCustomView:null,
        centerCustomView:null,
        headerTitle:'',
        headerTitleStyle:{},
        bgColor:"#fff"
        
    }
    render() {
        const {navigation,leftCustomView,rightCustomView,headerTitle,centerCustomView,bgColor,headerTitleStyle} = this.props
        const leftView = (
            <TouchableOpacity style={[styles.lefticon]} onPress={() => navigation.goBack()}>

                <Icon name="ios-arrow-dropleft" backgroundColor="#fff" color="#000" size={30}></Icon>

            </TouchableOpacity>
        )
        const _headerTitle=(
            <MyText style={headerTitleStyle}>{headerTitle}</MyText>
        )
        return <View style={[styles.container,{backgroundColor:bgColor}]}>
            <View style={[styles.box]}>
                <View style={[styles.left]}>
                    {leftCustomView ? leftCustomView : leftView}
                </View>
                <View style={[styles.center]}>
                    {centerCustomView ? centerCustomView : _headerTitle}
                </View>
                <View style={[styles.right]}>
                    {rightCustomView}
                </View>
            </View>
        </View>
    }
}
const _height=Platform.OS == "ios"? 44 : 56
const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == "ios"
            ? 20
            : 0,
        backgroundColor: "#fff"
    },
    box: {
        height:_height,
        flexDirection: 'row',

        width: width

    },
    left: {
        width: 60,
        height:_height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lefticon: {
        flex: 1,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    center: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        width: 60,
        height:_height,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default withNavigation(NavHeader);