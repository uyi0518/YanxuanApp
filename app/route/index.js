import {Platform} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import IndexView from '../pages/index/index'
import CartView from '../pages/cart/index'
import CategoryView from '../pages/category/index'
import PersonalView from '../pages/personal/index'
import RecommendView from '../pages/recommend/index'
import Gogogo from '../pages/personal/gogogo'


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
  first: {
    screen: TabContainer
  },
  gogogo:{
    screen:Gogogo
  }
}, {
  transitionConfig: () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal})
})

export default RootNavigator