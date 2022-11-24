import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MyNotes = () => {
    return (
        <View style={styles.container}>
            <Text>MyNotes</Text>
        </View>
    );
}

export default MyNotes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}); 