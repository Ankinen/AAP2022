import React from 'react';

// import GraphQL dependencies
import { useQuery, gql } from '@apollo/client';

// import the Note component
import Note from '../components/Note';

// the note query, accepts ID as variable
const GET_NOTE = gql`
    query note($id: ID!) {
        note(id: $id) {
            id
            createdAt
            content
            favoriteCount
            author{
                username
                id
                avatar
            }
        }
    }
`;

const NotePage = props => {
    // store the id found in the url as a variable
    const id = props.match.params.id;

    // query hook, passing the id valuea as a variable
    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

    // if the data is loading
    if (loading) return <p>Loading...</p>;

    // if there is an error in fetching the data
    if (error) return <p>Error! Note not found</p>;

    // if the fetch is successful, display the data
    return <Note note={data.note} />;
};

export default NotePage;