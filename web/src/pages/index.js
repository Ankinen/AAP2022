// import React and routing dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

// import shared layout component
import Layout from '../components/Layout';

// import routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';
import SignUp from './signup';
import NewNote from './new';
import EditNote from './edit';

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`;

// define routes
const Pages = () => {
    return (
        <Router>
            {/* Wrap the routes within the Layout component */}
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <PrivateRoute path="mynotes" element={<MyNotes />} />
                    <PrivateRoute path="favorites" element={<Favorites />} />
                    <Route path="note/:id" element={<NotePage />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="signin" element={<SignIn />} />
                    <PrivateRoute path="new" element={<NewNote />} />
                    <PrivateRoute path="edit/:id" element={<EditNote />} />
                </Routes>
            </Layout>
        </Router>
        );
};

// THIS HAS CHANGED, DOES NOT WORK THIS WAY ANYMORE!!!
// redirect the users to signin page if they are not logged in
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { loading, error, data } = useQuery(IS_LOGGED_IN);
    // if the data is loading, display a loading message
    {loading && <p>Loading...</p>}
    // if there is an error, display an error message
    {error && <p>Error!</p>}
    // if the user is logged in, route them to the requested component
    // else redirect them to the sign-in page
    return (
        <Route
            {...rest}
            render={props =>
                data.isLoggedIn === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                    to={{
                        pathname: '/signin',
                        state: { from: props.location }
                    }}
                    />
                )
                }
        />
    );    
};

export default Pages;