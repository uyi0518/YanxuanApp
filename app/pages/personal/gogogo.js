import React from 'react';
import {
    View,
    Text,
    Button,
    Platform,
    TextInput,
    ScrollView,
    StyleSheet,Alert,TouchableOpacity,Dimensions,FlatList
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width,height}=Dimensions.get('window')
_width=(width-150) / 5
numbers=[0,1,2,3,4,5,6,7,8,9]
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state={time:false}
    }
    componentDidMount(){
        setTimeout(()=>this.setState({time:true}),0)
    }
     
    _renderItem = ({item,index}) => {
        const right=(<View style={{flexWrap:'wrap',flexDirection:'row',height:100,width:70,justifyContent:'space-between'}} key={index}>
        <Text style={{width:20,height:20,borderWidth:1,borderColor:'#000',borderRadius:10,textAlign:'center'}}>全</Text>
        <Text style={{width:20,height:20,borderWidth:1,borderColor:'#000',borderRadius:10,textAlign:'center'}}>大</Text>
        <Text style={{width:20,height:20,borderWidth:1,borderColor:'#000',borderRadius:10,textAlign:'center'}}>小</Text>
        <Text style={{width:20,height:20,borderWidth:1,borderColor:'#000',borderRadius:10,textAlign:'center'}}>奇</Text>
        <Text style={{width:20,height:20,borderWidth:1,borderColor:'#000',borderRadius:10,textAlign:'center'}}>偶</Text>
        <Text style={{width:20,height:20,borderWidth:1,borderColor:'#000',borderRadius:10,textAlign:'center'}}>清</Text>
    </View>);

const center=(<View style={{flexWrap:'wrap',flexDirection:'row',flex:1,justifyContent:'space-between'}}>
{ numbers.map((item,index)=>
<View style={{width:_width,height:_width,  alignItems: 'center',}} key={index}>
      <Text style={{width:20,height:20,borderWidth:1,borderColor:'#000',borderRadius:10,textAlign:'center',}} >{item}</Text>
 </View>
 )}
</View>)
        return (
            <View style={{width:'100%',height:100,padding:10,flexDirection:'row',}}>
                <View style={{width:60}}>
                    <Text>万位</Text>
                </View>
                {center}
                {right}
        </View>
        )
    }

    render(){
      
    
        return <ScrollView style={{flex:1}}>
        <View style={[styles.container]}>
        {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate("tototo")}>
            <Text>gogogo</Text>
        </TouchableOpacity> */}
      { this.state.time &&
         <FlatList
                    data={numbers}
                    renderItem={this._renderItem}
                    
                    showsVerticalScrollIndicator={false}
                    getItemLayout={(data,index)=>(
                        {length: 100, offset: 100 * index, index}
                        )}
                    ref={(ref) => this._listRef = ref }
                    />
        }
    
        </View>
        </ScrollView>
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  }
});

export default Cart;