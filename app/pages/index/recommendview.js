import React from 'react';
import {
    View,
    Text,
    Platform,
    TouchableWithoutFeedback,
    StyleSheet,
    ScrollView,
    RefreshControl,
    Alert
} from 'react-native';
import SwiperView from '../common/swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewGoods from './newgoods'
import ChosenItems from './chosenitems'
import {goods} from './mock'
class RecommendView extends React.Component {
    constructor(props) {
        super(props);

    }
   

    render() {
        const pics = [
            {
                uri: 'http://yanxuan.nosdn.127.net/943d5554cea422c04dfa795d4fadcb45.jpg?imageView&thum' +
                        'bnail=750x0&quality=75'
            }, {
                uri: 'http://yanxuan.nosdn.127.net/291878253cb96c6992c8a5c875248b4d.jpg?imageView&thum' +
                        'bnail=750x0&quality=75'
            }, {
                uri: 'http://yanxuan.nosdn.127.net/147757207ebf06b54011cdc4bf814ace.jpg?imageView&thum' +
                        'bnail=750x0&quality=75'
            }
        ]
        const ThreeAdvantages = (
            <View style={[styles.threeadvantages]}>
                <Ionicons name="ios-checkmark-circle-outline" size={20} color="#b4282d"></Ionicons>
                <Text
                    style={{
                    color: "#b4282d",
                    fontSize: 14
                }}>网易自营品牌</Text>
                <Ionicons name="ios-checkmark-circle-outline" size={20} color="#b4282d"></Ionicons>
                <Text
                    style={{
                    color: "#b4282d",
                    fontSize: 14
                }}>30天无忧退换货</Text>
                <Ionicons name="ios-checkmark-circle-outline" size={20} color="#b4282d"></Ionicons>
                <Text
                    style={{
                    color: "#b4282d",
                    fontSize: 14
                }}>48小时快速退款</Text>
            </View>
        )
        const FourService = (
            <View style={[styles.fourservice]}>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1
                    }}>
                        <Ionicons name="ios-baseball" size={60} color="#40bf40"></Ionicons>
                        <Text
                            style={{
                            fontSize: 14
                        }}>邀请返利</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1
                    }}>
                        <Ionicons name="ios-aperture" size={60} color="#ffc299"></Ionicons>
                        <Text
                            style={{
                            fontSize: 14
                        }}>福利社</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1
                    }}>
                        <Ionicons name="ios-basketball" size={60} color="#ffc266"></Ionicons>
                        <Text
                            style={{
                            fontSize: 14
                        }}>会员俱乐部</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback >
                    <View
                        style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1
                    }}>
                        <Ionicons name="logo-codepen" size={60} color="#00aaff"></Ionicons>
                        <Text
                            style={{
                            fontSize: 14
                        }}>甄选家</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
        return <ScrollView
            style={[styles.container]}
            refreshControl={< RefreshControl style = {
            styles.refreshControlBase
        }
        refreshing = {
            false
        }
        onRefresh = {
            () => Alert.alert('刷新成功')
        }
        title = "好的生活 没那么贵" colors = {
            ['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']
        } />}>
            <SwiperView pics={pics}></SwiperView>
            {ThreeAdvantages}
            {FourService}
            <NewGoods goods={goods}/>
            <ChosenItems/>
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1

    },
    threeadvantages: {
        justifyContent: 'space-around',
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    fourservice: {
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 10,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    refreshControlBase: {
        backgroundColor: 'transparent'
    }
});

export default RecommendView;