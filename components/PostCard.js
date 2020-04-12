import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import {useNavigation} from '@react-navigation/native';

const PostCard = ({post}) => {
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        post_container: {
            flexDirection: 'column',
            alignItems: 'center',
            margin: 7,
            padding: 5
        },
        shadow: {
            elevation: 3,
            borderRadius: 15,
            shadowColor: "#000000",

        },
        post_title: {
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center'
        },
        post_body: {
            textAlign: 'center',
            fontSize: 20
        },
        post_img: {
            width: 250,
            height: 250,
            marginVertical: 10,
            backgroundColor: 'red'
        }
    })
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Post', {post_id: post.id})}
                          style={[styles.post_container, styles.shadow]}>
            <View style={styles.post_container}>
                <Text style={styles.post_title}>{post.title}</Text>
                <Image
                    style={styles.post_img}
                    source={{uri: 'https://source.unsplash.com/random'}}
                />
                <Text numberOfLines={2} style={styles.post_body}>{post.body}</Text>
            </View>
        </TouchableOpacity>

    )

}

export default PostCard
