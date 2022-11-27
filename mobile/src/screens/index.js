import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

import Feed from './feed';
import Favorites from "./favorites";
import MyNotes from "./mynotes";
import Note from "./note";

import AuthLoading from './authloading';
import SignIn from './signin';
import SignUp from './signup';
import Settings from './settings';

const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();
const AuthenticationStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const isSigned = true;

const checkLoginState = async () => {
    return await SecureStore.getItemAsync('token');
};

const FeedStackScreen = () => {
    return (
        <FeedStack.Navigator>
            <FeedStack.Screen name="FeedS" component={Feed} options={{title: 'All Feeds'}} />
            <FeedStack.Screen name="NoteS" component={Note} options={{title: 'Note'}} />
        </FeedStack.Navigator>
    );
}

const SettingsStackScreen = () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="SettingsS" comment={Settings} options={{title: 'Logout'}} />
        </SettingsStack.Navigator>
    );
}

function UnAuthenticatedScreens() {
    return (
        <AuthenticationStack.Navigator initialRouteName="AuthLoading">
            <AuthenticationStack.Screen name= "SignIn" component={SignIn} options = {{ title: 'Sign In'}} />
        </AuthenticationStack.Navigator>
    )
}

function AuthenticatedScreens() {
    return (
        <Tab.Navigator initialRouteName='Feed'>
            <Tab.Screen name="Feed"
                        component={FeedStackScreen}
                        options={{ title: 'Feed', 
                                tabBarIcon: ({ tintColor }) => (
                                <MaterialCommunityIcons name="home" 
                                                        size={24} 
                                                        color={tintColor} 
                                />
                                )
                        }}
            />
            <Tab.Screen name="Favorites"
                        component={Favorites}
                        options={{ title: 'My Favories',
                                tabBarIcon: ({ tintColor }) => (
                                <MaterialCommunityIcons name="notebook"
                                                        size={24}
                                                        color={tintColor}
                                />
                                )
                        }}
            />
            <Tab.Screen name="My Notes"
                        component={MyNotes}
                        options={{ title: 'My Notes',
                                tabBarIcon: ({ tintColor }) => (
                                <MaterialCommunityIcons name="star"
                                                        size={24}
                                                        color={tintColor}
                                />
                                )
                        }}
            />
            <Tab.Screen name="Settings"
                        component={Settings}
                        options={{title: 'Logout',
                            tabBarIcon: ({ tintColor }) => (
                            <MaterialCommunityIcons name="settings"
                                                    size={24}
                                                    color={tintColor}
                            />
                            )
                    }}
            />
        </Tab.Navigator>
    );
};

export default checkLoginState() ? AuthenticatedScreens : UnAuthenticatedScreens;
