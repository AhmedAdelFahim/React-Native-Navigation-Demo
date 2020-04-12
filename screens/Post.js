import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View, SafeAreaView} from "react-native";
import axios from 'axios'

const Post = ({route: {params: {post_id}}}) => {
    const [isLoading,changeLoadingState] = useState(false)
    const [post, setPost] = useState({})
    const styles = StyleSheet.create({
        post_container: {
            flexDirection: 'column',
            alignItems: 'center',
            margin: 7,
            padding: 15
        },
        shadow: {
            elevation: 3,
            borderRadius: 15,
            shadowColor: "#000000",

        },
        post_title: {
            fontWeight: 'bold',
            fontSize: 17,
            textAlign: 'center'
        },
        post_body: {
            textAlign: 'center'
        },
        post_img: {
            width: 250,
            height: 250,
            marginVertical: 10,
            // resizeMode: 'center',
            // backgroundColor: 'red'
        }
    })

    useEffect(() => {
        changeLoadingState(true)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`).then((response) => {
            setPost(response.data)
            changeLoadingState(false)
        }).catch((e) => {
            console.log(e)
            changeLoadingState(false)
        })
    }, [])
    return (<SafeAreaView>
            {isLoading && <ActivityIndicator color="#5163EB" size="large" style={{marginVertical: 25}}/>}
            <View style={[styles.post_container, styles.shadow]}>
                <Text style={styles.post_title}>{post.title}</Text>
                <Image
                    style={styles.post_img}
                    source={{uri: 'https://source.unsplash.com/random'}}
                />
                <Text style={styles.post_body}>{post.body}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Post
