import React from "react";
import { StyleSheet } from "react-native";
import NoteFeed from '../components/NoteFeed';

const Feed = () => {
    return (
        <NoteFeed />
    );
}

export default Feed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});  