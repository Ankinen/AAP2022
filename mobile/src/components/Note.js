import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

const Note = ({ note }) => {
    return (
        <View style={styles.noteView}>
            <ScrollView alwaysBounceVertical={false}>
                <Text>{note.content}</Text>
            </ScrollView>
        </View>
    );
}

export default Note;

const styles = StyleSheet.create({
    noteView: {
        padding: 10,
    }
});