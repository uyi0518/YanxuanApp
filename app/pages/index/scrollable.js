import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MyScrollableTabBar from './custom'
import RecommendView from './recommendview'

class ScrollableView extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const tabs = [
            '新品',
            '限时购',
            '居家',
            '配件',
            '服装',
            '电器',
            '洗护'
        ]
        const Tabviews = tabs.map((tab) => <View tabLabel={tab} style={[styles.tabs]} key={tab}>
            <Text >{tab}</Text>
        </View>)

        return <View style={[styles.container]}>
            <ScrollableTabView
                renderTabBar={() => <MyScrollableTabBar/>}
                tabBarActiveTextColor="#b4282d"
                tabBarTextStyle={{
                fontSize: 16
            }}>
                <View style={[styles.container]} tabLabel='推荐'>
                    <RecommendView></RecommendView>
                </View>
                
                {Tabviews}

            </ScrollableTabView>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1

    },
    tabs: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

export default ScrollableView;