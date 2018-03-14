import {Platform} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import IndexView from '../pages/index/index'
import CartView from '../pages/cart/index'
import CategoryView from '../pages/category/index'
import PersonalView from '../pages/personal/index'
import RecommendView from '../pages/recommend/index'
import LoginView from '../pages/login/index'
import Gogogo from '../pages/personal/gogogo'
import splash from '../pages/splash'
import Tototo from '../pages/personal/tototo'


const TabContainer = TabNavigator({
  index: {
    screen: IndexView
  },
  recommend: {
    screen: RecommendView
  },
  category: {
    screen: CategoryView
  },
  cart: {
    screen: CartView
  },
  personal: {
    screen: PersonalView
  }

}, {
  lazy: true,
  swipeEnabled: false,
  animationEnabled: (Platform.OS === 'ios'),
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#b4282d',
    inactiveTintColor: '#999999',
    showIcon: true,
    style: {
      backgroundColor: '#fff'
    },
    indicatorStyle: {
      opacity: 0
    },
    tabStyle: {
      padding: 0,
      height:50
    },
    labelStyle:{
      margin:0
    }
  }
})

const RootNavigator = StackNavigator({
  splash:{
    screen:splash
  },
  first: {
    screen: TabContainer
  },
  gogogo:{
    screen:Gogogo
  },
  login:{
    screen:LoginView 
  },
  tototo:{
    screen:Tototo
  },
  
}, {
  transitionConfig: () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal})
})

export default RootNavigator