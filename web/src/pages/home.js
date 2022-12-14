import React from 'react';

// import the required libraries
import { useQuery, gql } from '@apollo/client';

import Button from '../components/Button';
import ReactMarkdown from 'react-markdown';
import NoteFeed from '../components/NoteFeed';

// get notes query, stored as a variable
const GET_NOTES = gql`
    query NoteFeed($cursor: String) {
        noteFeed (cursor: $cursor) {
            cursor
            hasNextPage
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
    }
`;

const Home = () => {
    // query hook
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

    // if the data is loading, display a loading message
    if (loading) return <p>Loading...</p>;

    // if there is an error fetching the data, display the error msg
    if (error) return <p>Error!</p>;

    // if the fetch is successful, display the data in UI
    return (
        // add a <React.Fragment> element to provide a parent element
        <React.Fragment>
            <NoteFeed notes={data.noteFeed.notes} />
            {/* only display the load more button if hasNext is true */}
            {data.noteFeed.hasNextPage && (
            <Button
                onClick={() =>
                    fetchMore({
                        variables: {
                            cursor: data.noteFeed.cursor
                        },
                        updateQuery: (previousResult, { fetchMoreResult }) => {
                            return {
                                noteFeed: {
                                    cursor: fetchMoreResult.noteFeed.cursor,
                                    hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                                    // combine the new results and the old
                                    notes: [
                                        ...previousResult.noteFeed.notes,
                                        ...fetchMoreResult.noteFeed.notes
                                    ],
                                    __typename: 'noteFeed'
                                }
                            };
                        }
                    })
                }
            >
                Load more
            </Button>)}
        </React.Fragment>
    );
};

export default Home;