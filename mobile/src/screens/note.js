import React from "react";
import { Text, View, StyleSheet } from "react-native";

const NoteScreen = () => {
    return (
        <View>
            <Text>This is a note!</Text>
        </View>
    );
}

export default NoteScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});