import React from 'react';
import {
    View,
    Text,
    Button,
    Platform,
    TextInput,
    StyleSheet,Alert,TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Calendar from 'react-native-calendar-select';


class Cart extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          startDate: null,  
          endDate: null
        };
    
      }
      
      confirmDate=({startDate, endDate, startMoment, endMoment})=> {
        this.setState({
          startDate,
          endDate
        });
      }
      openCalendar=()=> {
        this.calendar && this.calendar.open();
      }
      render() {
      
        let customI18n = {
          'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
          'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          'text': {
            'start': 'Check in',
            'end': 'Check out',
            'date': 'Date',
            'save': 'Confirm',
            'clear': 'Reset'
          },
          'date': 'DD / MM'  
        }
       
        let color = {subColor: '#f0f0f0',mainColor:'#ff6400'}

        return <View> 
            <Text>111</Text>
            <Button title="Open Calendar" onPress={this.openCalendar}/>
            <Calendar
        i18n="zh"
        ref={(calendar) => {this.calendar = calendar}}
        
        color={color}
        format="YYYYMMDD"
        minDate="20180201"
        maxDate="20180401"
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onConfirm={this.confirmDate}
      />
      <Text>{this.state.startDate && this.state.startDate.toLocaleString()}</Text>
      <Text>{this.state.endDate && this.state.endDate.toLocaleString()}</Text>
          </View>
        
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