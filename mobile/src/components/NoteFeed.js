import React from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Note from "./Note";

const NoteFeed = ({notes, navigation}) => {
    return (
        <View>
            <FlatList
                data={notes}
                keyExtractor={({ id }) => id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item }) => (<TouchableOpacity
                onPress={() =>
                    navigation.navigate('NoteS', {
                        id: item.id
                    })
                }
                >
                    <View style={styles.feedView}>
                    <Note note={item} />
                    </View>
                </TouchableOpacity>)}
            />
        </View>
    );
};

export default NoteFeed;

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#ced0ce"
    },
    feedView: {
        height: 100,
        overflow: 'hidden',
        marginBottom: 10,
    },
});