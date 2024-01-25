import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SummaryScreen from './src/screens/SummaryScreen';
import NewNoteScreen from './src/screens/NewNoteScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import IconSettings from './src/images/icon_settings.svg';
import LinearGradient from 'react-native-linear-gradient';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Text style={{color: '#fff', fontSize: 24, fontWeight: '600'}}>Home</Text>
          ),
          headerTitle: null,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <IconSettings width={20} height={20} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#280947',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const NewNoteHeader = () => {
  return (
    <Stack.Navigator initialRouteName="NewNote">
      <Stack.Screen
        name="NewNoteStack"
        component={NewNoteScreen}
        options={{
          headerLeft: () => <Text style={{textAlign: 'right'}}>New Note</Text>,
          headerTitle: null,
        }}
      />
    </Stack.Navigator>
  );
};

const SummaryHeader = () => {
  return (
    <Stack.Navigator initialRouteName="Summary">
      <Stack.Screen
        name="SummaryStack"
        component={SummaryScreen}
        options={{
          headerLeft: () => <Text style={{textAlign: 'right'}}>Summary</Text>,
          headerTitle: null,
          headerStyle: {
            backgroundColor: '#280947',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            height: 150,
          },
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTransparent: false,
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsHeader = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="SettingsStack"
        component={SettingsScreen}
        options={{
          headerLeft: () => <Text style={{textAlign: 'right'}}>Settings</Text>,
          headerTitle: null,
        }}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#F94695',
        tabBarInactiveTintColor: '#918DAC',
        tabBarIcon: ({color, size, focused}) => {
          let iconComponent;
          let iconWidth = 50;
          let iconHeight = 47;

          if (route.name === 'Home') {
            iconComponent = focused ? (
              <Image
                source={require('./src/images/icon_tab_home_active.png')}
                style={{width: iconWidth, height: iconHeight, marginBottom: 5}}
              />
            ) : (
              <Image
                source={require('./src/images/icon_tab_home_inactive.png')}
                style={{width: iconWidth, height: iconHeight, marginBottom: 5}}
              />
            );
          } else if (route.name === 'Summary') {
            iconComponent = focused ? (
              <Image
                source={require('./src/images/icon_tab_summary_active.png')}
                style={{width: iconWidth, height: iconHeight, marginBottom: 5}}
              />
            ) : (
              <Image
                source={require('./src/images/icon_tab_summary_inactive.png')}
                style={{width: iconWidth, height: iconHeight, marginBottom: 5}}
              />
            );
          }

          return iconComponent;
        },
        tabBarStyle: {
          position: 'absolute',
          height: 100,
          paddingBottom: 15,
          paddingTop: 20,
          borderTopWidth: 0,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['#1C0B37', '#1D0837']}
            style={{
              flex: 1,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderColor: 'rgba(255,255,255,0)',
            }}
          />
        ),
      })}>
      <Tab.Screen name="Home" component={HomeHeader} />
      {/* <Tab.Screen name="+" component={NewNoteHeader} /> */}
      <Tab.Screen name="Summary" component={SummaryHeader} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen name="NewNote" component={NewNoteHeader} />
        <Stack.Screen name="Settings" component={SettingsHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;