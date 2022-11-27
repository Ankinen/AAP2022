import React from "react";
import { useQuery, gql } from '@apollo/client';
import { Text } from "react-native";
import NoteFeed from '../components/NoteFeed';

// compose our query
const GET_NOTES = gql`
  query notes {
    notes {
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

const Feed = ({ navigation}) => {
    const { loading, error, data } = useQuery(GET_NOTES);

    if (loading) return <Text>Loading...</Text>;
    //use this error message in development
    if(error) return <Text>{JSON.stringify(error)}</Text>;
    //This in production
    //if(error) return <Text>Error loading notes</Text>;
    return <NoteFeed notes={data.notes} navigation={navigation}/>;
}

export default Feed;