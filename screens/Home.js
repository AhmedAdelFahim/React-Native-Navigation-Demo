import React from 'react';
import {View, StyleSheet, Text} from "react-native";

const Home = (props) => {
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
        <Text style={styles.content}>Home</Text>
    </View>)
}

export default Home
