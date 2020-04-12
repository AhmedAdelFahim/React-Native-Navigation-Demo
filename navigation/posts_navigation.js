import React from 'react';
import Post from '../screens/Post'
import Posts from '../screens/Posts'
import {Text} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import {AntDesign} from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Posts" component={Posts}/>
            <Stack.Screen name="Post" component={Post} options={{
                headerBackTitle: () => (<Text>BACK</Text>),
                headerBackImage: () => (<AntDesign name="back" size={30} color="black"/>)
            }}/>
        </Stack.Navigator>
    );
}
