import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

const Note = props => {
    return (
        <View style={styles.noteView}>
            <ScrollView alwaysBounceVertical={false}>
            <Text>{props.note.content}</Text>
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