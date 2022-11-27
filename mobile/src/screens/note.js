import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useQuery, gql } from "@apollo/client";

import Note from '../components/Note';
import Loading from "../components/Loading";

// note query
const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

const NoteScreen = ({ navigation}) => {
    const { loading, error, data } = useQuery(GET_NOTE, {variables: { id } });
    if (loading) return <Loading />;
    //use this error message in development
    if(error) return <Text>{JSON.stringify(error)}</Text>;
    //This in production
    //if(error) return <Text>Error loading notes</Text>;
    return <Note note={data.note} navigation={navigation}/>;
}

export default NoteScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});