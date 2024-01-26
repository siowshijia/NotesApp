import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SummaryScreen from './src/screens/SummaryScreen';
import NewNoteScreen from './src/screens/NewNoteScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import IconSettings from './src/images/icon_settings.svg';
import IconPlus from './src/images/icon_plus.svg';
import IconBack from './src/images/icon_back.svg';
import LinearGradient from 'react-native-linear-gradient';
import {commonStyles} from './src/styles/common';
import { NotesProvider } from './src/context/NotesContext';

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
          headerLeft: () => <Text style={commonStyles.titleTextLg}>Home</Text>,
          headerTitle: null,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <IconSettings width={20} height={20} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#280947',
          },
          headerTitleStyle: {
            color: 'rgba(255,255,255,0)',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const NewNoteHeader = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="NewNote">
      <Stack.Screen
        name="NewNoteStack"
        component={NewNoteScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={commonStyles.rowHorzCenter}>
              <IconBack width={24} height={24} />
              <Text style={commonStyles.titleTextLg}> New Note</Text>
            </TouchableOpacity>
          ),
          headerTitle: null,
          headerStyle: {
            backgroundColor: '#280947',
          },
          headerTitleStyle: {
            color: 'rgba(255,255,255,0)',
          },
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
          headerLeft: () => (
            <Text style={commonStyles.titleTextLg}>Summary</Text>
          ),
          headerTitle: null,
          headerStyle: {
            backgroundColor: 'rgba(255,255,255,0)',
          },
          headerTitleStyle: {
            color: 'rgba(255,255,255,0)',
          },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsHeader = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="SettingsStack"
        component={SettingsScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={commonStyles.rowHorzCenter}>
              <IconBack width={24} height={24} />
              <Text style={commonStyles.titleTextLg}> Settings</Text>
            </TouchableOpacity>
          ),
          headerTitle: null,
          headerStyle: {
            backgroundColor: '#280947',
          },
          headerTitleStyle: {
            color: 'rgba(255,255,255,0)',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const NewNoteButton = (state, descriptors, navigation) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 36,
        // height: 36
      }}>
      <TouchableOpacity
        style={{
          zIndex: 10,
        }}
        onPress={() => navigation.navigate('NewNote')}>
        <IconPlus width={36} height={36} />
      </TouchableOpacity>
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
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
            style={commonStyles.navTabBottom}
          />
        ),
      })}>
      <Tab.Screen name="Home" component={HomeHeader} />
      <Tab.Screen name="Summary" component={SummaryHeader} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NotesProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={BottomTabNavigator} />
          <Stack.Screen name="NewNote" component={NewNoteHeader} />
          <Stack.Screen name="Settings" component={SettingsHeader} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>
  );
};

export default App;
