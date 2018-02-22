import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../common/search';

class IndexHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <View style={[styles.container]}>
            <Search {...this.props}></Search>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {

      
        height: 40,
        
    }
});

export default IndexHeader;