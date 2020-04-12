import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList} from "react-native";
import axios from 'axios'
import PostCard from "../components/PostCard";

const Posts = (props) => {
    console.log(props)
    const [posts, setPosts] = useState([])
    const styles = StyleSheet.create({
        button_container: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        button: {
            backgroundColor: '#5163EB',
            height: 50,
            borderRadius: 30,
            flexGrow: 0.5,
            justifyContent: "center",
            alignItems: "center",
            marginStart: 10,
            marginEnd: 10,
            marginTop: 25,

        },
        btn_text: {
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: 20
        }
    })



    const getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            // console.log(response.data);
            setPosts(posts.concat(response.data))
        }).catch((e) => {
            console.log(e)
        })
    }
    return (<SafeAreaView>
        <View style={styles.button_container}>
            {posts.length ? <FlatList
                data={posts}
                renderItem={({item}) => <PostCard post={item}/>}
                keyExtractor={item => item.id}
            /> : <TouchableOpacity onPress={getPosts} style={[styles.button]}>
                <Text style={styles.btn_text}>GET POSTS</Text>
            </TouchableOpacity>}

        </View>

    </SafeAreaView>)
}

export default Posts
