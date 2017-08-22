import React from 'react';
import { Alert, View, Text, Button, Image, StyleSheet, TouchableOpacity, AppRegistry} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import SettingsList from 'react-native-settings-list';
import Example from './components/app'



//headerview
class HeaderView extends React.Component {
  render() {
    return (
      <Image
          style={styles.headerContainer}
          source={require('./images/img_home_bg.png')}
      >
          <Image
              style={styles.headerLogo}
              source={require('./images/ic_head_logo.png')}
              resizeMode="contain"
          />
          <View style={{alignItems: 'center'}}>
              <Text style={{color: 'white', marginBottom: 15, fontSize: 15}}>查 询 食 物
                  信 息</Text>
              <TouchableOpacity
                  activeOpacity={0.75}
                  style={styles.headerSearchContainer}
                  // onPress={searchAction}
              >
                  <Image style={{width: 20, height: 20, marginHorizontal: 5}}
                         source={require('./images/ic_home_search.png')}/>
                  <Text style={{color: 'rgba(222, 113, 56, 0.8)', fontSize: 15}}>请输入食物名称</Text>
              </TouchableOpacity>
          </View>
      </Image>
    )
  }
}

class CategoryView extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row',}}>
        <View style={{flex: 2, backgroundColor: 'yellow',}}>
          <Text>Listening</Text>
        </View>
        <View style={{
          flex: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
          <View style={{width: gScreen.width * 5/7, flexDirection: 'row', marginBottom: 5,}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue', marginHorizontal: 5, flex: 1,}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue', marginHorizontal: 5, flex: 1,}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue', marginHorizontal: 5, flex: 1,}} />
          </View>
          <View style={{width: gScreen.width * 5/7, flexDirection: 'row', marginBottom: 5}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue', flex: 1, marginHorizontal: 5,}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue',  flex: 1,marginHorizontal: 5,}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue',  flex: 1,marginHorizontal: 5,}} />
          </View>
          <View style={{width: gScreen.width * 5/7, flexDirection: 'row'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue', marginHorizontal: 5,}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue', marginHorizontal: 5,}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue', marginHorizontal: 5,}} />
          </View>

        </View>
      </View>
    )
  }
}

class SettingView extends React.Component {
  constructor(){
  super();
  this.onValueChange = this.onValueChange.bind(this);
  this.state = {switchValue: false};
}
render() {
  return (
    <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item
            icon={
                <Image style={styles.imageStyle} source={require('./images/airplane.png')}/>
            }
            hasSwitch={true}
            switchState={this.state.switchValue}
            switchOnValueChange={this.onValueChange}
            hasNavArrow={false}
            title='Airplane Mode'
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('./images/airplane.png')}/>}
            title='Wi-Fi'
            titleInfo='Bill Wi The Science Fi'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route to Wifi Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('./images/airplane.png')}/>}
            title='Blutooth'
            titleInfo='Off'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route to Blutooth Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('./images/airplane.png')}/>}
            title='Cellular'
            onPress={() => Alert.alert('Route To Cellular Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('./images/airplane.png')}/>}
            title='Personal Hotspot'
            titleInfo='Off'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route To Hotspot Page')}
          />
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('./images/airplane.png')}/>}
            title='Notifications'
            onPress={() => Alert.alert('Route To Notifications Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('./images/airplane.png')}/>}
            title='Control Center'
            onPress={() => Alert.alert('Route To Control Center Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('./images/airplane.png')}/>}
            title='Do Not Disturb'
            onPress={() => Alert.alert('Route To Do Not Disturb Page')}
          />
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('./images/airplane.png')}/>}
            title='General'
            onPress={() => Alert.alert('Route To General Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('./images/airplane.png')}/>}
            title='Display & Brightness'
            onPress={() => Alert.alert('Route To Display Page')}
          />
        </SettingsList>
  );
}
  onValueChange(value){
    this.setState({switchValue: value});
  }
}

// tab navigator
class ExperimentAScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>
          stack navigator的使用
        </Text>
        <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
        title="Chat with Lucy"
        />
        <Text>
          top tabBar 的使用，同时支持swipe切换
        </Text>
        <Button
        onPress={() => this.props.navigation.navigate('TopTab', { user: 'Lucy' })}
        title="try TopTab"
        />
      </View>
    )
  }
}

class ExperimentBScreen extends React.Component {
  render() {
    return (
      <View>
          <Text>header view sample</Text>
          <HeaderView></HeaderView>
          <Text> layout 例子</Text>
          <CategoryView></CategoryView>
      </View>
    )
  }
}

class ExperimentCScreen extends React.Component {
  render() {
    return (
      <View>
          <Text>试验场3</Text>
          <Text> setting page 例子</Text>
          <SettingView></SettingView>
      </View>
    )
  }
}

class ExperimentDScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
    }}>
        <Text>试验场4</Text>
        <Text>很酷的动画interaction集合</Text>
        <Example></Example>
      </View>
    )
  }
}

class XinWenScreen extends React.Component {
  render() {
    return <Text>试验场4</Text>
  }
}

class YuLeScreen extends React.Component {
  render() {
    return <Text>试验场4</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  试验场A: { screen: ExperimentAScreen },
  试验场B: { screen: ExperimentBScreen },
  试验场C: { screen: ExperimentCScreen },
  试验场D: { screen: ExperimentDScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const SubTopTabNavigator  = TabNavigator({
  新闻: { screen: XinWenScreen },
  娱乐: { screen: YuLeScreen },
},
{
  tabBarPosition: 'top',
  swipeEnabled: 'true',
}
)

SubTopTabNavigator.navigationOptions = {
  title: "top tab bar screen"
}

//stacknavigator

class HomeScreen extends React.Component {
  static navigationOptions = {
      title: 'Welcome',
    };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
         onPress={() => navigate('Chat', { user: 'Lucy' })}
         title="Chat with Lucy"
       />
      </View>);
   }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
  const {state, setParams} = navigation;
  const isInfo = state.params.mode === 'info';
  const {user} = state.params;
  return {
    title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
    headerRight: (
      <Button
        title={isInfo ? 'Done' : `${user}'s info`}
        onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
      />
    ),
  };
  };
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  TopTab: { screen: SubTopTabNavigator},
  Chat: { screen: ChatScreen },
});


const styles = StyleSheet.create({
  headerContainer: {
        height: 220,
        width: gScreen.window,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: __IOS__ ? 20 + 15 : 15,
        paddingBottom: 28,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(1,1,1,0)',
        overflow: 'hidden'
    },
    headerLogo: {
        width: 66,
        height: 24,
    },
    headerSearchContainer: {
        height: 50,
        width: gScreen.width - 16 * 2,
        backgroundColor: 'white',
        borderRadius: 4,
        alignItems: 'center',
        flexDirection: 'row'
    },
    imageStyle:{
      marginLeft:15,
      marginRight:20,
      alignSelf:'center',
      width:20,
      height:24,
      justifyContent:'center'
    }
})

AppRegistry.registerComponent('componentspool', () => SimpleApp);
