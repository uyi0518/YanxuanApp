import React from 'react';
import {
    View,
    Text,
    
    Platform,
    TextInput,
    ScrollView,
    StyleSheet,
    Alert,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Animated,
    
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input,Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('window')
_width = (width - 150) / 5
numbers = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: false,
            isbonce111:true,
            isbonce:false,
            height:50
        }
    }
    componentDidMount() {
        // this.emailInput.shake()
        console.log(this.view)
        console.log(this.view111)
    }
    handleViewRef = ref => this.view = ref;
    handleViewRef111 = ref => this.view111 = ref;
    handleViewRef222 = ref => this.view222 = ref;
  
    bounce = () => this.view.bounce(800).then(endState => this.setState({height:0}));
    bounce111 = () => {
        // this.setState({isbonce:true})
        this.view222.zoomOutLeft(800).then(endState => this.setState({height:0}));
            
}

    render() {

        return <ScrollView style={{
            flex: 1
        }}>
        
            <View style={[styles.container]}>
   
            {/* <Input
                 
                  leftIcon={
                    <Icon
                      name='user'
                      color='#ccc'
                      size={25}
                    />
                  }
                  shake={true}
                  
                  inputStyle={{marginLeft: 10, color: '#000',backgroundColor:'red',padding:0}}
                  keyboardAppearance="light"
                  placeholder="Email"
                  autoFocus={false}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  returnKeyType="next"
                  ref={ input => this.emailInput = input }
                  containerStyle={{borderColor:'#000',borderWidth:1,}}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                  
                  errorStyle={{textAlign: 'center', fontSize: 12}}
                  errorMessage="Please enter a valid email address"
                />
                   
                 
                  <Button
            title="Add to Cart"
            titleStyle={{fontWeight: 'bold', fontSize: 18}}
          
            buttonStyle={{height: 40, width: 200, borderWidth: 0, borderColor: 'transparent', borderRadius: 20,overflow:'hidden',}}
            containerStyle={{marginVertical: 10,backgroundColor:'transparent',overflow:'hidden',}}
            icon={
              <Icon
                name='arrow-right'
                size={15}
                color='white'
              />
            }
            iconRight
            iconContainerStyle={{marginLeft: 5}}
            
          /> */}






          {/* <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text> */}
          <Animatable.Text animation="bounce" iterationCount="infinite" easing="linear" >Up and down you go</Animatable.Text>
          <Animatable.Text animation="swing" iterationCount="infinite" easing="linear" direction="alternate">Up and down you go</Animatable.Text>

           <TouchableOpacity onPress={this.bounce111} >
          <Animatable.Text animation={this.state.isbonce ? "zoomOutLeft" : ''}  easing="linear" 
          direction="alternate" style={{height:this.state.height,}}
          ref={this.handleViewRef222}>Up and down you go</Animatable.Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={this.bounce}>
                    <Animatable.View ref={this.handleViewRef} >
                    <Text>Bounce me!</Text>
                    </Animatable.View>
          </TouchableOpacity>

          <Animated.View ref={this.handleViewRef111}></Animated.View>
            </View>

        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
    }
});

export default Cart;