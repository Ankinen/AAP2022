import React from 'react';
import  ReactMarkdown from 'react-markdown';
import { useQuery } from '@apollo/client';

// import the format utility from date-fns
import { format } from 'date-fns';
import styled from 'styled-components';

import NoteUser from './NoteUser';
import { IS_LOGGED_IN } from '../gql/query';

// Keep notes within an 800px frame
const StyleNote = styled.article`
    max-width: 800px;
    margin: 0 auto;
`;

// style the note metadata
const MetaData = styled.div`
    @media (min-width: 500px) {
        display: flex;
        align-items: top;
    }
`;

// add some spave between the avatar and meta info
const MetaInfo = styled.div`
    padding-right: 1em;
`;

// align 'UserActions' to the right on large screens
const UserActions = styled.div`
    margin-left: auto;
`;

const Note = ({ note }) => {
    const { loading, error, data } = useQuery(IS_LOGGED_IN);
    // if the data is loading, display a loading message
    if (loading) return <p>Loading...</p>;
    // if there is an error fetching the data, display an error message
    if (error) return <p>Error!</p>;

    return (
        <StyleNote>
            <MetaData>
                <MetaInfo>
                <img
                 src={note.author.avatar}
                 alt="{note.author.username} avatar"
                 height="30px"
                />
                </MetaInfo>
                <MetaInfo>
                    <em>by</em> {note.author.username} <br />
                    {/* update the date markup to format it as Day, Month, Year */}
                    {format(new Date(note.createdAt), 'dd.MM.yyyy')}
                </MetaInfo>
                <UserActions>
                    <em>Favorites:</em> {note.favoriteCount}
                </UserActions>
            </MetaData>
            <ReactMarkdown source={note.content} />
        </StyleNote>
    );
};

export default Note;