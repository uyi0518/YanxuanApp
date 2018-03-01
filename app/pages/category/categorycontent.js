import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
    PixelRatio
} from 'react-native';

const image_width= Dimensions.get('window').width - 120;
const image_height =  image_width / 3;
class ContentView extends React.PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return <ScrollView style={[styles.container]}>
            <Image
                source={{
                uri: 'http://yanxuan.nosdn.127.net/d053d5b60635a28eeff07f27e3e91322.jpg?imageView&thumbnail=0x196&quality=75'
            }} style={{width:image_width,height:image_height}}/>
            <View style={[styles.heading]}>
                <View style={[styles.headingline]}></View>
                <Text style={[styles.headingtext]}>配件分类</Text>
                <View style={[styles.headingline]}></View>
            </View>
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading:{
        justifyContent: 'center',
        alignItems: 'center',
        height:60,
        flexDirection: 'row',
    },
    headingline:{
        width:40,
        height:StyleSheet.hairlineWidth,
        backgroundColor:'#000'
    },
    headingtext:{
        color:'#000',
        marginLeft:10,
        marginRight:10

    },
});

export default ContentView;