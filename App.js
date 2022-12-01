import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import ChatListScreen from './screens/ChatListScreen';
import ChatSettingScreen from './screens/ChatSettingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from './screens/SettingScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const chatIcon = <Icon name="wechat" size={25} color="#000000" />;
  const settingIcon = <Icon name="user" size={25} color="#000000" />;

  return (
    <Tab.Navigator screenOptions={{headerTitle: ''}}>
      <Tab.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: () => {
            return chatIcon;
          },
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => {
            return settingIcon;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="ChatSetting" component={ChatSettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
