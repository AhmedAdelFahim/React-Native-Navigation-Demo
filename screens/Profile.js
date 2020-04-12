import React from 'react';
import {View, StyleSheet, Text} from "react-native";

const Profile = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        content:{
            color:'#000',
        }
    })
    return (<View style={styles.container}>
        <Text style={styles.content}>Profile</Text>
    </View>)
}

export default Profile
