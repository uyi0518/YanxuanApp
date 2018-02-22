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
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button'

const WINDOW_WIDTH = Dimensions
  .get('window')
  .width;

const MyScrollableTabBar = createReactClass({
  propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    scrollOffset: PropTypes.number,
    style: ViewPropTypes.style,
    tabStyle: ViewPropTypes.style,
    tabsContainerStyle: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style,
    onScroll: PropTypes.func
  },

  getDefaultProps() {
    return {
      scrollOffset: 52,
      activeTextColor: 'navy',
      inactiveTextColor: 'black',
      backgroundColor: '#fff',
      style: {},
      tabStyle: {},
      tabsContainerStyle: {},
      underlineStyle: {}
    };
  },

  getInitialState() {
    this._tabsMeasurements = [];
    return {
      _leftTabUnderline: new Animated.Value(0),
      _widthTabUnderline: new Animated.Value(0),
      _arrowRotate: new Animated.Value(0),
      _containerWidth: null,
      _isclicked: false
    };
  },

  componentDidMount() {
    this
      .props
      .scrollValue
      .addListener(this.updateView);
  },

  updateView(offset) {
    const position = Math.floor(offset.value);
    const pageOffset = offset.value % 1;
    const tabCount = this.props.tabs.length;
    const lastTabPosition = tabCount - 1;

    if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
      return;
    }

    if (this.necessarilyMeasurementsCompleted(position, position === lastTabPosition)) {
      this.updateTabPanel(position, pageOffset);
      this.updateTabUnderline(position, pageOffset, tabCount);
    }
  },

  necessarilyMeasurementsCompleted(position, isLastTab) {
    return this._tabsMeasurements[position] && (isLastTab || this._tabsMeasurements[position + 1]) && this._tabContainerMeasurements && this._containerMeasurements;
  },

  updateTabPanel(position, pageOffset) {
    const containerWidth = this._containerMeasurements.width;
    const tabWidth = this._tabsMeasurements[position].width;
    const nextTabMeasurements = this._tabsMeasurements[position + 1];
    const nextTabWidth = nextTabMeasurements && nextTabMeasurements.width || 0;
    const tabOffset = this._tabsMeasurements[position].left;
    const absolutePageOffset = pageOffset * tabWidth;
    let newScrollX = tabOffset + absolutePageOffset;

    // center tab and smooth tab change (for when tabWidth changes a lot between two
    // tabs)
    newScrollX -= (containerWidth - (1 - pageOffset) * tabWidth - pageOffset * nextTabWidth) / 2;
    newScrollX = newScrollX >= 0
      ? newScrollX-40
      : 0;

    if (Platform.OS === 'android') {
      this
        ._scrollView
        .scrollTo({x: newScrollX, y: 0, animated: false});
    } else {
      const rightBoundScroll = this._tabContainerMeasurements.width - (this._containerMeasurements.width);
      newScrollX = newScrollX > rightBoundScroll
        ? rightBoundScroll
        : newScrollX;
      this
        ._scrollView
        .scrollTo({x: newScrollX, y: 0, animated: false});
    }

  },

  updateTabUnderline(position, pageOffset, tabCount) {
    const lineLeft = this._tabsMeasurements[position].left;
    const lineRight = this._tabsMeasurements[position].right;

    if (position < tabCount - 1) {
      const nextTabLeft = this._tabsMeasurements[position + 1].left;
      const nextTabRight = this._tabsMeasurements[position + 1].right;

      const newLineLeft = (pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft);
      const newLineRight = (pageOffset * nextTabRight + (1 - pageOffset) * lineRight);

      this
        .state
        ._leftTabUnderline
        .setValue(newLineLeft);
      this
        .state
        ._widthTabUnderline
        .setValue(newLineRight - newLineLeft);
    } else {
      this
        .state
        ._leftTabUnderline
        .setValue(lineLeft);
      this
        .state
        ._widthTabUnderline
        .setValue(lineRight - lineLeft);
    }
  },

  renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    const {activeTextColor, inactiveTextColor, textStyle} = this.props;
    const textColor = isTabActive
      ? activeTextColor
      : inactiveTextColor;
    const fontWeight = isTabActive
      ? 'bold'
      : 'normal';

    return <Button
      key={`${name}_${page}`}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => onPressHandler(page)}
      onLayout={onLayoutHandler}>
      <View style={[styles.tab, this.props.tabStyle]}>
        <Text
          style={[
          {
            color: textColor,
            fontWeight
          },
          textStyle
        ]}>
          {name}
        </Text>
      </View>
    </Button>;
  },
  renderItem(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    const {activeTextColor, inactiveTextColor, textStyle} = this.props;
    const textColor = isTabActive
      ? activeTextColor
      : inactiveTextColor;
    const fontWeight = isTabActive
      ? 'bold'
      : 'normal';

    return <Button
      key={`${name}_${page}`}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => onPressHandler(page)}
      onLayout={onLayoutHandler}>
      <View style={[styles.item, this.props.tabStyle,{borderColor:textColor}]}>
        <Text
          style={[
          {
            color: textColor,
            fontWeight
          },
          textStyle
        ]}>
          {name}
        </Text>
      </View>
    </Button>;
  },

  measureTab(page, event) {
    const {x, width, height} = event.nativeEvent.layout;
    this._tabsMeasurements[page] = {
      left: x,
      right: x + width,
      width,
      height
    };
    this.updateView({value: this.props.scrollValue._value});
  },

  render() {
    const {_isclicked} = this.state

    const tabUnderlineStyle = {
      position: 'absolute',
      height: 2,
      backgroundColor: 'red',
      bottom: 0
    };

    const dynamicTabUnderline = {
      left: this.state._leftTabUnderline,
      width: this.state._widthTabUnderline
    };
    const normalView = (
      <ScrollView
        ref={(scrollView) => {
        this._scrollView = scrollView;
      }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
        bounces={false}
        scrollsToTop={false}>
        <View
          style={[
          styles.tabs, {
            width: this.state._containerWidth
          },
          this.props.tabsContainerStyle
        ]}
          ref={'tabContainer'}
          onLayout={this.onTabContainerLayout}>
          {this
            .props
            .tabs
            .map((name, page) => {
              const isTabActive = this.props.activeTab === page;
              const renderTab = this.props.renderTab || this.renderTab;
              return renderTab(name, page, isTabActive, this.props.goToPage, this.measureTab.bind(this, page));
            })}
          <Animated.View
            style={[tabUnderlineStyle, dynamicTabUnderline, this.props.underlineStyle]}/>
        </View>
      </ScrollView>       
    )

    const specialView = (
      <View style={styles.special}>
        <Text>全部频道</Text>
      </View>

    )

    return <View style={[styles.mainbox]}>
      <View
        style={[
        styles.container, {
          backgroundColor: this.props.backgroundColor
        },
        this.props.style
      ]}
        onLayout={this.onContainerLayout}>
        {_isclicked
          ? specialView
          : normalView}
        <Animated.View
          style={{
          width: 40,
          height: 39,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          transform: [
            {
              rotate: this
                .state
                ._arrowRotate
                .interpolate({
                  inputRange: [
                    0, 1
                  ],
                  outputRange: ['0deg', '180deg']
                })
            }
          ]
        }}>
          <TouchableOpacity onPress={this._pullup} style={{flex:1,alignItems: 'center',justifyContent: 'center',}}>
            <Icon name="ios-arrow-down" size={24} color="#000"></Icon>

          </TouchableOpacity>

        </Animated.View>

      </View>
      {_isclicked?(<View
        style={[
        styles.items, {
          width: WINDOW_WIDTH
        }
      ]}>
        {this
          .props
          .tabs
          .map((name, page) => {
            const isTabActive = this.props.activeTab === page;
            const renderItem = this.renderItem;
            return renderItem(name, page, isTabActive, this._goToPage, this.measureTab.bind(this, page));
          })}
      </View>):null}
      
    </View>;

  },
  

  componentWillReceiveProps(nextProps) {
    // If the tabs change, force the width of the tabs container to be recalculated
    if (JSON.stringify(this.props.tabs) !== JSON.stringify(nextProps.tabs) && this.state._containerWidth) {
      this.setState({_containerWidth: null});
    }
  },
    _goToPage(page){
              this.setState((prevState, props) => ({
      _isclicked: !prevState._isclicked
    }))
      this.props.goToPage(page)

    if (!this.state._isclicked) {
      Animated
        .timing(this.state._arrowRotate, {toValue: 1})
        .start();

    } else {
      Animated
        .timing(this.state._arrowRotate, {toValue: 0})
        .start();
    }

    },




  _pullup(e) {
    this.setState((prevState, props) => ({
      _isclicked: !prevState._isclicked
    }))
    if (!this.state._isclicked) {
      Animated
        .timing(this.state._arrowRotate, {toValue: 1})
        .start();

    } else {
      Animated
        .timing(this.state._arrowRotate, {toValue: 0})
        .start();
    }

  },

  onTabContainerLayout(e) {
    this._tabContainerMeasurements = e.nativeEvent.layout;
    let width = this._tabContainerMeasurements.width;
    if (width < WINDOW_WIDTH) {
      width = WINDOW_WIDTH;
    }
    this.setState({_containerWidth: width});
    this.updateView({value: this.props.scrollValue._value});
  },

  onContainerLayout(e) {
    this._containerMeasurements = e.nativeEvent.layout;
    this.updateView({value: this.props.scrollValue._value});
  }
});

const styles = StyleSheet.create({
  tab: {
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft:5,
    marginRight:15

  },
  container: {
    height: 40,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: 'transparent',
    flexDirection: 'row'
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 10,
    paddingRight: 10
  },
  special: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },
  mainbox: {
    height: 40
  },
  item: {
    width:80,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth:1,
    borderBottomWidth:0.5,
    borderLeftWidth:0.5,
    borderRightWidth:1,
    borderColor: '#000',
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    flex:0
  },
  items: {
    position: "absolute",
    top: 40,
    left: 0,
    backgroundColor: "#fff",
    zIndex: 999,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 0,
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:10,
  }
});

export default MyScrollableTabBar;