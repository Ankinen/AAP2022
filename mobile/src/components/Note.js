import { fieldNameFromStoreName } from "@apollo/client/cache";
import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { format } from 'date-fns';

const Note = ({ note }) => {
    return (
        <View style={styles.noteView}>
            <ScrollView alwaysBounceVertical={false}>
                <Text>
                    Note by {note.author.username} / Published{' '}
                    {format (new Date(note.createdAt), 'dd-MM-yyyy')}
                </Text>
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