import React from 'react';
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import PostsNavigation from './posts_navigation'
import Profile from '../screens/Profile'

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function () {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#5163EB',
                    inactiveTintColor: 'black',
                }}>
                <Tab.Screen name="Home" component={PostsNavigation}
                            options={{
                                tabBarIcon: ({color}) => {
                                    return <FontAwesome name="home" size={30} color={color}/>
                                }
                            }}/>
                <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarIcon: ({color}) => {
                        return <MaterialCommunityIcons name="face-profile" size={30} color={color}/>
                    }
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
